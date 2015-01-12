Ti.App.addEventListener('dataUpdated', function(e) {
  if(! _.isEmpty($.chatRecords.data)) {
    $.tableRecords.data = [];
    $.tableRecords.removeEventListener('click', tableClick);
    $.tableRecords.removeEventListener('longpress', tableLongPress);    }  
});
exports.fetchChat = function(_tabGroup, _chatWindow) {
  
  alert("OK");
};

exports.open = function(_tabGroup){

  alert("OPEN");
};
