exports.on = function() {
};

var book = Alloy.createModel('book', {title:'Green Eggs and Ham', author:'Dr. Seuss'});

 
function cleanup() {
    $.destroy();
}
