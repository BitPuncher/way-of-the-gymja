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
		$(document).find('.active').toggleClass('active');
		$(document).find('#activities-selector').toggleClass('active');
		var that = this;

		WayOfTheGymja.UserWorkouts = new WayOfTheGymja.Collections.Workouts();
		WayOfTheGymja.UserWorkouts.fetch({
			success: function() {
				
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
		$(document).find('.active').toggleClass('active');
		$(document).find('#feed-selector').toggleClass('active');
		this.topLevelElement.html('');
	}

	// workoutsCreate: function (user_id) {
	// 	this.topLevelElement.html('');

	// 	var createView = new WayOfTheGymja.Views.WorkoutsCreate({
	// 		$el: $('<div class="new-workout"></div>')
	// 	});

	// 	this.topLevelElement.append(createView.render().$el);
	// },
});
