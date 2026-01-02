document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.list-item');

    elements.forEach(el => {
        const links = el.querySelectorAll('a.link-arrow');

        links.forEach(link => {
            link.classList.add('up');

            const submenu = link.nextElementSibling;

            if (link.classList.contains('link-current')) {
                link.classList.add('active', 'down');
                submenu.style.display = 'block';
            }

            link.addEventListener('click', event => {
                event.preventDefault();

                const slideToggle = (target, duration = 500) => {
                    const style = window.getComputedStyle(target);
                    style.display === 'none' ? slideDown(target, duration) : slideUp(target, duration);
                };

                slideToggle(submenu, 200);

                if (link.classList.contains('down')) link.classList.toggle('rotate-revert');

                link.classList.add('transition');
                link.classList.toggle('active');
                link.classList.toggle('rotate');

                link.classList.toggle('link-current');
            });
        });
    });

    const slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight; // force reflow
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;

        setTimeout(() => {
            target.style.display = 'none';
            ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom', 'overflow', 'transition-duration', 'transition-property']
                .forEach(prop => target.style.removeProperty(prop));
        }, duration);
    };

    const slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        if (window.getComputedStyle(target).display === 'none') target.style.display = 'block';

        const height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight; // force reflow

        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');

        setTimeout(() => {
            ['height', 'overflow', 'transition-duration', 'transition-property']
                .forEach(prop => target.style.removeProperty(prop));
        }, duration);
    };
});
