Alloy.Globals.fb.appid = Ti.App.Properties.getString('ti.facebook.appid');
Alloy.Globals.fb.permissions = ['publish_stream','email','user_birthday'];
Alloy.Globals.fb.forceDialogAuth = false;

Alloy.Globals.fb.addEventListener('login', function(e) {
  if (e.success) {

    Ti.App.Properties.setString('Cloud.sessionId', Alloy.Globals.fb.accessToken);
    Alloy.Globals.fb.requestWithGraphPath('me',{},"GET",function(e) {
      if (e.success) {
        var obj = JSON.parse(e.result),
            moment = require('alloy/moment'),
            token, user, email, birthday;

        email = obj.email;
        birthday = moment(obj.birthday, "MM/DD/YYYY");
        token = Alloy.Globals.fb.accessToken;
        Ti.API.info("Success: " +
                    "email" + email +
                    "birthday" + birthday +
                    "token" + token
                   );
        user = Alloy.createModel('social');
        user.fbLogin(token,email, birthday);
      }
      Alloy.Globals.TabGroup.setActiveTab(1);
      
      var chatRecords = Alloy.createCollection('chat');
      var _chat = Alloy.createModel('chat');
      _chat.show({
        success:function(response){
          Ti.API.info("chatRecords");
          Ti.API.info(response);
        },
        error:function(response){
        }
      });

    });

  } else if (e.error) {
    Ti.API.info(e.error);
  } else if (e.cancelled) {
    Ti.API.info("Canceled");
  }
});
Ti.API.info(Alloy.Globals);
Ti.API.info(Alloy.Globals.TabGroup);
$.login.open();
$.fbloginLabel.addEventListener('click', function(e) {
  Alloy.Globals.fb.authorize();
});


