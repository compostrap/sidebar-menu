/**
	** Multi-level sidebar menu
	** Built on Bootstrap 5
	**/
export class SidebarMenu {
	static _slideStates = new WeakMap();
	static _submenuId = 0;

	static init() {
		const elements = document.querySelectorAll('.list-item');
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const duration = reduceMotion ? 0 : 200;

		elements.forEach((el) => {
			const links = el.querySelectorAll('a.link-arrow');

			links.forEach((link) => {
				const submenu = link.nextElementSibling;
				if (!submenu) return;
				if (link.dataset.sidebarMenuInitialized === 'true') return;

				link.dataset.sidebarMenuInitialized = 'true';
				link.classList.add('up');
				if (!submenu.id) {
					submenu.id = `sidebar-submenu-${++this._submenuId}`;
				}
				link.setAttribute('aria-controls', submenu.id);

				if (link.classList.contains('link-current')) {
					link.classList.add('active', 'down');
					submenu.style.display = 'block';
				}
				link.setAttribute('aria-expanded', String(submenu.style.display === 'block'));

				link.addEventListener('click', (event) => {
					event.preventDefault();
					const expanded = this._slideToggle(submenu, duration);
					link.setAttribute('aria-expanded', String(expanded));

					if (link.classList.contains('down')) {
						link.classList.toggle('rotate-revert');
					}

					link.classList.add('transition');
					link.classList.toggle('active');
					link.classList.toggle('rotate');
					link.classList.toggle('link-current');
				});
			});
		});

		document.querySelectorAll('.list-link.link-current:not(.link-arrow)').forEach((link) => {
			link.setAttribute('aria-current', 'page');
		});
	}

	static _slideToggle(target, duration) {
		const state = this._slideStates.get(target);
		const isOpen = state
			? state.open
			: window.getComputedStyle(target).display !== 'none';

		if (!isOpen) {
			this._slideDown(target, duration);
		} else {
			this._slideUp(target, duration);
		}

		return !isOpen;
	}

	static _slideUp(target, duration) {
		this._animate(target, false, duration);
	}

	static _slideDown(target, duration) {
		this._animate(target, true, duration);
	}

	static _animate(target, open, duration) {
		const previousState = this._slideStates.get(target);
		const currentHeight = target.getBoundingClientRect().height;
		if (previousState?.timer) {
			clearTimeout(previousState.timer);
		}

		if (open) {
			target.style.display = 'block';
		}

		[
			'height',
			'padding-top',
			'padding-bottom',
			'margin-top',
			'margin-bottom',
			'overflow',
			'box-sizing',
			'transition-duration',
			'transition-property'
		].forEach((prop) => target.style.removeProperty(prop));

		const naturalHeight = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.boxSizing = 'border-box';
		target.style.height = currentHeight + 'px';
		target.style.paddingTop = open ? '0' : '';
		target.style.paddingBottom = open ? '0' : '';
		target.style.marginTop = open ? '0' : '';
		target.style.marginBottom = open ? '0' : '';
		target.offsetHeight;

		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = open ? naturalHeight + 'px' : '0';
		if (open) {
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
		} else {
			target.style.paddingTop = '0';
			target.style.paddingBottom = '0';
			target.style.marginTop = '0';
			target.style.marginBottom = '0';
		}

		const state = { open, timer: null };
		this._slideStates.set(target, state);
		const finish = () => {
			if (this._slideStates.get(target) !== state) return;
			if (!open) target.style.display = 'none';
			[
				'height',
				'padding-top',
				'padding-bottom',
				'margin-top',
				'margin-bottom',
				'overflow',
				'box-sizing',
				'transition-duration',
				'transition-property'
			].forEach((prop) => target.style.removeProperty(prop));
			this._slideStates.set(target, { open, timer: null });
		};

		if (duration === 0) {
			finish();
		} else {
			state.timer = setTimeout(finish, duration);
		}
	}
}
