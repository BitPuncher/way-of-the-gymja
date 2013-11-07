FitocracyClone.Collections.Workouts = Backbone.Collection.extend({

  model: FitocracyClone.Models.Workout,
  url: function () {
  	return "api/users/" + FitocracyClone.current_user + "/workouts"
  },

  parse: function (response) {
  	return response['workouts'];
  }

});
