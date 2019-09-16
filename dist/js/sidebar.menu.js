/*!
 * Sidebar menu
 * Copyright Zdeněk Papučík
 * MIT License
 */
(function($) {

  // class with arrow icon
  var linkArrow     = '.link-arrow';

  // class current link
  var linkCurrent   = '.link-current';

  // class hidden list
  var listHidden    = '.list-hidden';

  // class list item
  var listItem      = '.list-item';

  // toggle sidebar menu
  $('#sidebar-toggle').on('click', function() {
    $('#wrapper').toggleClass('sidebar-toggle');
  });

  // list init
  $(listItem).each(function() {

    var el = $(this);
    var parent  = el.parent();

    // current link class
    var current = parent.find(linkArrow + linkCurrent);

    // default icon menu
    parent.find(linkArrow).addClass('up');

    // view the list above the current link
    if (current.length > 0) {

      // active down icon
      current.addClass('active down');

      // show hidden list
      current.next(listHidden).show();
    }
  });

  // list transition arrow
  $(linkArrow).on('click', function() {

    var el = $(this);

    // adding rotation effect to arrows icons
    el.addClass('transition').toggleClass('active rotate');

    // adding link current on click link
    !(el.hasClass('link-current')) ? el.addClass('link-current') : el.removeClass('link-current');

    // show hidden list
    el.next(listHidden).slideToggle('fast');

    // rotate the direction of rotation of the arrow
    if (el.parent().find(linkArrow).hasClass('down')) {
      el.toggleClass('rotate-revert');
    }
  });

}(jQuery));
