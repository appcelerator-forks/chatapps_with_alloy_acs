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
      testMethod: function(){}
    });
    return Model;
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {});
    return Collection;
  }
};
