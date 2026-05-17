/**
 * Multi-level sidebar menu
 * Built on Bootstrap 5
 */
export class SidebarMenu {
	static init() {
		const elements = document.querySelectorAll(".list-item");
		const duration = 200;

		elements.forEach((el) => {
			const links = el.querySelectorAll("a.link-arrow");

			links.forEach((link) => {
				link.classList.add("up");

				const submenu = link.nextElementSibling;
				if (!submenu) return;

				if (link.classList.contains("link-current")) {
					link.classList.add("active", "down");
					submenu.style.display = "block";
				}

				link.addEventListener("click", (event) => {
					event.preventDefault();
					this._slideToggle(submenu, duration);

					if (link.classList.contains("down")) {
						link.classList.toggle("rotate-revert");
					}

					link.classList.add("transition");
					link.classList.toggle("active");
					link.classList.toggle("rotate");
					link.classList.toggle("link-current");
				});
			});
		});
	}

	static _slideToggle(target, duration) {
		const style = window.getComputedStyle(target);
		if (style.display === "none") {
			this._slideDown(target, duration);
		} else {
			this._slideUp(target, duration);
		}
	}

	static _slideUp(target, duration) {
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.boxSizing = "border-box";
		target.style.height = target.offsetHeight + "px";
		target.offsetHeight;

		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		setTimeout(() => {
			target.style.display = "none";
			[
				"height",
				"padding-top",
				"padding-bottom",
				"margin-top",
				"margin-bottom",
				"overflow",
				"transition-duration",
				"transition-property"
			].forEach((prop) => target.style.removeProperty(prop));
		}, duration);
	}

	static _slideDown(target, duration) {
		target.style.removeProperty("display");
		let display = window.getComputedStyle(target).display;
		if (display === "none") display = "block";
		target.style.display = display;

		const height = target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;

		target.style.boxSizing = "border-box";
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.height = height + "px";
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");

		setTimeout(() => {
			[
				"height",
				"overflow",
				"transition-duration",
				"transition-property"
			].forEach((prop) => target.style.removeProperty(prop));
		}, duration);
	}
}
