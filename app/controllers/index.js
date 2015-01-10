var fb = require('facebook');
fb.appid = Ti.App.Properties.getString('ti.facebook.appid');
fb.permissions = ['publish_stream','email','user_birthday'];
fb.forceDialogAuth = false;
fb.addEventListener('login', function(e) {
  if (e.success) {
    fb.requestWithGraphPath('me',{},"GET",function(e) {
        if (e.success) {
          var obj = JSON.parse(e.result),
              moment = require('alloy/moment'),
              token, user, email, birthday;

          email = obj.email;
          birthday = moment(obj.birthday, "MM/DD/YYYY");
          token = fb.accessToken;
          Ti.API.info("Success: " +
                      "email" + email +
                      "birthday" + birthday +
                      "token" + token
                     );
          user = Alloy.createModel('social');
          user.fbLogin(token,email, birthday);
        }
      }
    );

  } else if (e.error) {
    Ti.API.info(e.error);
  } else if (e.cancelled) {
    Ti.API.info("Canceled");
  }
});

$.fbloginLabel.addEventListener('click', function(e) {
  fb.authorize();
});


$.label.addEventListener('click', function(e) {
  var newWindow;
  newWindow = Alloy.createController('newWindow');
  return newWindow.move($.tabTwo);
});

$.index.open();
