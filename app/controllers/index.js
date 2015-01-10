$.index.open();

$.label.addEventListener('click', function(e) {
  var newWindow;
  newWindow = Alloy.createController('newWindow');
  return newWindow.move($.tabOne);
});$.index.open();
