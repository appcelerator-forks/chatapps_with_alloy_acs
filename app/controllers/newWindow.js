exports.move = function(_tab) {
  Ti.API.info(_tab);
  return _tab.open($.newWindow);
};
