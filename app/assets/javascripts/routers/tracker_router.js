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
				var date = new Date();
				var dateString = (date.getYear() + 1900).toString() + "-" +
					date.getDate().toString() + "-" + (date.getMonth() + 1).toString();


				var formView = new WayOfTheGymja.Views.WorkoutCreate({
					$el: $('<div class="span8" id="new-workout">'),
					date: dateString,
				});

				formView.listenTo(listView, 'addInput', formView.addInput);

				that.topLevelElement.append(listView.render().$el);
				that.topLevelElement.append(formView.render().$el);
			}
		});
	},
})