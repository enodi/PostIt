$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.dropdown-button').dropdown({
    belowOrigin: true, // displays dropdown below the button
    hover: true,
    inDuration: 300,
    outDuration: 225,
    gutter: 0 // spacing from edge
  });
  $('select').material_select();
  $('.modal').modal({
    dismissible: false,
  });
  $('.tooltipped').tooltip({ delay: 50 });
});
