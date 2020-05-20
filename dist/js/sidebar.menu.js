/*!
 * Sidebar menu
 * Copyright Zdeněk Papučík
 * MIT License
 */
(function($) {

  // class with arrow icon
  const linkArrow = '.link-arrow';

  // class current link
  const linkCurrent = '.link-current';

  // class hidden list
  const listHidden = '.list-hidden';

  // class list item
  const listItem = '.list-item';

  // list init
  $(listItem).each(function() {

    const el = $(this);
    const parent = el.parent();
    const link = parent.find(linkArrow + linkCurrent);

    // default icon menu
    parent.find(linkArrow).addClass('up');

    // view the list above the current link
    if (link.length > 0) {

      // active down icon
      link.addClass('active down');

      // show hidden list
      link.next(listHidden).show();
    }
  });

  // list transition arrow
  $(linkArrow).on('click', function() {

    const el = $(this);
    const linkCurrent = 'link-current';

    // adding rotation effect to arrows icons
    el.addClass('transition').toggleClass('active rotate');

    // adding link current on click link
    !(el.hasClass(linkCurrent)) ? el.addClass(linkCurrent) : el.removeClass(linkCurrent);

    // show hidden list
    el.next(listHidden).slideToggle('fast');

    // rotate the direction of rotation of the arrow
    if (el.parent().find(linkArrow).hasClass('down')) {
      el.toggleClass('rotate-revert');
    }
  });

}(jQuery));
