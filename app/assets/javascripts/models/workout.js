WayOfTheGymja.Models.Workout = Backbone.Model.extend({
	url: "api/workouts",

	parse: function (response) {

		this.activities = new WayOfTheGymja.Collections.Activities(
			response['activities'],
			{ parse: true });
		delete response['activities'];
		return response;
	},
});