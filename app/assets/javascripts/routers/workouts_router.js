WayOfTheGymja.Routers.Workouts = Backbone.Router.extend({
	initialize: function (options) {
		this.topLevelElement = options.topLevelElement;
	},

	routes: {
		"": "workoutsIndex",
		"users/:user_id/workouts/index": "workoutsIndex",
		"users/:user_id/workouts/create": "workoutsCreate",
	},

	workoutsIndex: function (user_id) {
		var that = this;

		WayOfTheGymja.UserWorkouts = new WayOfTheGymja.Collections.Workouts();
		WayOfTheGymja.UserWorkouts.fetch({
			success: function() {
				// debugger
				
				that.topLevelElement.html('');

				var indexView = new WayOfTheGymja.Views.WorkoutsIndex({
					collection: WayOfTheGymja.UserWorkouts,
					$el: $('<div class="userWorkouts"></div>')
				});

				that.topLevelElement.append(indexView.render().$el);
			}
		});
	},

	workoutsCreate: function (user_id) {

	},
});
