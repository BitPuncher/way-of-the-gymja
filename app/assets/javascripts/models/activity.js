WayOfTheGymja.Models.Activity = Backbone.Model.extend ({
	parse: function (response) {
		this.activity_base = new WayOfTheGymja.Models.ActivityBase(
			response['activity_base']
		);
		delete response['activity_base'];

		this.activity_sets = new WayOfTheGymja.Collections.ActivitySets(
			response['activity_sets']
		);
		delete response['activity_sets'];

		return response
	}
})