//this file is unused and unnecessary pretty sure

WayOfTheGymja.Views.WorkoutsCreate = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el
	},

	template: JST['workouts/create'],

	// events: {
	// 	"form submit": "createWorkout"
	// },

	// createWorkout: function () {
	// 	//stuff
	// },

	render: function () {
		var content = this.template({});

		this.$el.html(content);
		return this;
	}
})