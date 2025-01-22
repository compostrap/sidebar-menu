document.addEventListener('DOMContentLoaded', () => {
    let elements = document.querySelectorAll('.list-item');
    
    // Definice slide funkcí mimo cyklus
    const slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.boxSizing = 'border-box';
        target.style.height = `${target.offsetHeight}px`;
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;

        setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }

    const slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.height = `${height}px`;

        setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }

    elements.forEach(el => {
        let allLinks = el.querySelectorAll('a.link-arrow');
        allLinks.forEach(link => {
            link.classList.add('up');
            if (link.classList.contains('link-current')) {
                link.classList.add('active', 'down');
                link.nextElementSibling.style.display = 'block';
            }

            link.addEventListener('click', (event) => {
                event.preventDefault();

                const nextSibling = link.nextElementSibling;
                const isCurrent = link.classList.contains('link-current');

                // Toggle slide up/down
                if (window.getComputedStyle(nextSibling).display === 'none') {
                    slideDown(nextSibling, 200);
                } else {
                    slideUp(nextSibling, 200);
                }

                // Toggle classes for animation and state
                link.classList.toggle('rotate-revert');
                link.classList.add('transition');
                link.classList.toggle('active');
                link.classList.toggle('rotate');

                if (isCurrent) {
                    link.classList.remove('link-current');
                } else {
                    link.classList.add('link-current');
                }
            });
        });
    });
});
