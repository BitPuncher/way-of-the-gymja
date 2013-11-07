FitocracyClone.Routers.Workouts = Backbone.Router.extend({
	initialize: function (options) {
		this.topLevelElement = options.topLevelElement;
	},

	routes: {
		"users/:user_id/workouts/index": "workoutsIndex",
		"users/:user_id/workouts/create": "workoutsCreate",
	},

	workoutsIndex: function (user_id) {
		var that = this;

		FitocracyClone.UserWorkouts = new FitocracyClone.Collections.Workouts();
		FitocracyClone.UserWorkouts.fetch({
			success: function() {
				var indexView = new FitocracyClone.Views.WorkoutsIndex({
					collection: FitocracyClone.UserWorkouts,
					$el: $('.userWorkouts')
				});

				indexView.render();
			}
		});
	},

	workoutsCreate: function (user_id) {

	},
});
