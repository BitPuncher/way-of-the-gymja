FitocracyClone.Models.Workout = Backbone.Model.extend({
	parse: function (response) {

		this.activities = new FitocracyClone.Collections.Activities(
			response['activities']);
		delete response['activities'];
		return response;
	},
});