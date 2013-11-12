WayOfTheGymja.Routers.Tracker = Backbone.Router.extend({
	routes: {
		"": "create"
	},

	initialize: function (options) {
		this.topLevelElement = options.topLevelElement;
	},

	create: function () {
		var that = this;

		//get list of exercises
		WayOfTheGymja.ActivityBases = new WayOfTheGymja.Collections.ActivityBases();
		WayOfTheGymja.ActivityBases.fetch({
			success: function () {
				that.topLevelElement.html('');

				var listView = new WayOfTheGymja.Views.ActivitiesList({
					$el: $('<div class="span4" id="activity-list">'),
					collection: WayOfTheGymja.ActivityBases,
				});

				//get new workout form
				var formView = new WayOfTheGymja.Views.WorkoutForm({
					$el: $('<div class="span8" id="new-workout">'),
				});

				formView.listenTo(listView, 'addInput', formView.addInput);

				that.topLevelElement.append(listView.render().$el);
				that.topLevelElement.append(formView.render().$el);
			}
		});
	},
})