/*!
 * Sidebar menu for Bootstrap 4
 * Copyright Zdeněk Papučík
 * MIT License
 */
(function($) {

  // class with arrow icon
  const linkArrow   = '.link-arrow';

  // class to hide the list
  const listHidden  = '.list-hidden';

  // toggle sidebar menu
  $('#sidebar-toggle').on('click', function() {
    $('#wrapper').toggleClass('sidebar-toggle');
  });

  // list init
  $('.list-item').each(function() {

    const el = $(this);
    const parent  = el.parent();

    // current link class
    const current = parent.find('.link-current');

    // class active link with icon
    const active  = current.addClass('active down');

    // change up arrow icon
    parent.find(linkArrow).addClass('up');

    // view the list above the current link
    if (current.length > 0) {
      active.next(listHidden).show();
    }
  });

  // list open hidden
  $('.list-link').on('click', function() {

    const el = $(this);

    // switch the class on the current link
    el.parent().find(linkArrow).toggleClass('active');

    // view a hidden list
    el.next(listHidden).slideToggle('fast');

  });

  // list transition arrow
  $('.link-arrow').on('click', function() {

    const el = $(this);

    // adding rotation effect to arrows icons
    el.addClass('transition').toggleClass('rotate');

    // rotate the direction of rotation of the arrow
    if (el.parent().find(linkArrow).hasClass('down')) {
      el.toggleClass('rotate-revert');
    }
  });

}(jQuery));
