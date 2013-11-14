WayOfTheGymja.Routers.Tracker = Backbone.Router.extend({
	routes: {
		"": "create"
	},

	initialize: function (options) {
		this.topLevelElement = options.topLevelElement;
	},

	create: function () {
		var that = this;

		WayOfTheGymja.ActivityBases = new WayOfTheGymja.Collections.ActivityBases();
		WayOfTheGymja.ActivityBases.fetch({
			success: function () {
				that.topLevelElement.html('');

				var listView = new WayOfTheGymja.Views.ActivitiesList({
					$el: $('<div class="span4" id="activity-list">'),
					collection: WayOfTheGymja.ActivityBases,
				});

				var date = new Date();
				var dateString = (date.getYear() + 1900).toString() + "-" +
					(date.getMonth() + 1).toString() + "-" + date.getDate().toString();


				var formView = new WayOfTheGymja.Views.WorkoutCreate({
					collection: WayOfTheGymja.ActivityBases,
					$el: $('<div class="span8" id="new-workout">'),
					date: dateString,
				});

				formView.listenTo(listView, 'addInput', formView.addInput);
				listView.listenTo(formView, 'addListItem', listView.addListItem);

				that.topLevelElement.append(listView.render().$el);
				that.topLevelElement.append(formView.render().$el);
			}
		});
	},
})