exports.definition = {
	config: {
		"columns" : {
			"active" : "boolean"
		},
		"adapter": {
			"type": "acs",
			"collection_name": "chats"
		},
		"settings" : {
			"object_name" : "chats",
			"object_method" : "Chats"
		}
	},
	extendModel: function(Model) {
    if (Ti.App.Properties.hasProperty('Cloud.sessionId')) {
      var that = this,
          token = "MYTOKEN";

      this.config.Cloud.SocialIntegrations.externalAccountLogin({
        type: 'facebook',
        token: token
      }, function (e) {
        if (e.success) {
          Ti.API.info(e.meta.session_id);
			    that.config.Cloud.sessionId = e.meta.session_id;
		    }
      });
    }

		_.extend(Model.prototype, {
			show: function(_params){
				var that = this,
            token = "MYTOKEN;

        this.config.Cloud.SocialIntegrations.externalAccountLogin({
          type: 'facebook',
          token: token
        }, function (e) {

				  that.config.Cloud.Chats.query({
            session_id: e.meta.session_id,
            participate_ids:["54b1b602a48e61e4e6032ddb"].join(',')
          },function(e){
					  if (e.success) {
						  if (_params.success) {
                alert(e.chats);
							  _params.success(e.chats);
						  }
					  } else {
						  Ti.API.error(e);
						  if (_params.error) {
							  _params.error(that, (e.error && e.message) || e);
						  }
					  }
				  });
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
