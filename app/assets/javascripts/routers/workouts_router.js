WayOfTheGymja.Routers.Workouts = Backbone.Router.extend({
	initialize: function (options) {
		this.topLevelElement = options.topLevelElement;
	},

	routes: {
		"": "activities",
		"activities": "activities",
		"feed": "feed",
	},

	activities: function () {
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

	feed: function () {
		//grabs activities + statuses and friend activities
	}

	// workoutsCreate: function (user_id) {
	// 	this.topLevelElement.html('');

	// 	var createView = new WayOfTheGymja.Views.WorkoutsCreate({
	// 		$el: $('<div class="new-workout"></div>')
	// 	});

	// 	this.topLevelElement.append(createView.render().$el);
	// },
});
