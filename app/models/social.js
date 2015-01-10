exports.definition = {
  config: {
    columns: {
      active: "boolean"
    },
    adapter: {
      type: "acs",
      collection_name: "socialIntegrations"
    },
    settings: {
      object_name: "socialIntegrations",
      object_method: "socialIntegrations"
    }
  },
  extendModel: function(Model) {
    _.extend(Model.prototype, {
      fbLogin: function(token, email, birthday){
        this.config.Cloud.SocialIntegrations.externalAccountLogin({
          type: 'facebook',
          token: token,
          email: email,
          custom_fields: {
            birthday: birthday
          }
        }, function (e) {
          if (e.success) {
            var user = e.users[0];
            Ti.API.info('Success:\n' +
                  'id: ' + user.id + '\n' +
                  'first name: ' + user.first_name + '\n' +
                  'last name: ' + user.last_name);
          } else {
            Ti.API.info('Error:\n' +
                  ((e.error && e.message) || JSON.stringify(e)));
          }
        });        
      }
    });
    return Model;
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {});
    return Collection;
  }
};
