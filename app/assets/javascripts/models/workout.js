WayOfTheGymja.Models.Workout = Backbone.Model.extend({
	parse: function (response) {

		this.activities = new WayOfTheGymja.Collections.Activities(
			response['activities'],
			{ parse: true });
		// debugger
		delete response['activities'];
		return response;
	},
});