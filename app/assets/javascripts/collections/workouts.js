WayOfTheGymja.Collections.Workouts = Backbone.Collection.extend({

  model: WayOfTheGymja.Models.Workout,
  url: function () {
  	return "http://localhost:3000/api/users/" + WayOfTheGymja.current_user + "/workouts"
  },

});
