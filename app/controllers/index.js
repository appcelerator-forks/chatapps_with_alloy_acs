// グルーバル定義
Alloy.Globals.Root = $;
Alloy.Globals.TabGroup = $.tabGroup;
Alloy.Globals.CurrentTab = null;
Alloy.Globals.Tabs = {
	login: $.login,
	chat: $.chat
};

Ti.API.info("Alloy.Globals.fb.loggedIn" + Alloy.Globals.fb.loggedIn);
if(Alloy.Globals.fb.loggedIn === false) {
  // var login = Alloy.createController('login'),
  //     loginView = login.getView();
  Ti.API.info("login start");
  var loginController = Alloy.createController('login');
} else {
  $.tabGroup.open();
}

$.tabGroup.addEventListener('open',function(e){
  Alloy.Globals.CurrentTab = e.source.activeTab;
  Ti.API.info(Alloy.Globals.CurrentTab);
});

$.tabGroup.addEventListener('focus',function(e){
  Alloy.Globals.CurrentTab = e.tab;
  Ti.API.info("FOCUS: " + Alloy.Globals.CurrentTab);
});
