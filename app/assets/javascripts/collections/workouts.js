WayOfTheGymja.Collections.Workouts = Backbone.Collection.extend({
  model: WayOfTheGymja.Models.Workout,
  
  url: function () {
  	return "/api/users/" + WayOfTheGymja.current_user + "/workouts"
  },

});