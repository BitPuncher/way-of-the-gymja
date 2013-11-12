WayOfTheGymja.Views.WorkoutForm = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el;
	},

	template: JST['tracker/create'],

	events: {
		"submit form": "submitForm",
	},

	render: function () {
		var content = this.template({});

		this.$el.html(content);
		return this;
	},

	addInput: function (activity_base) {
		var formInputs = this.$el.find('#workout_activities');
		if (formInputs.find('.' + activity_base.get('set_type')).length > 0) {
			return;
		}

		var el = $('<div class="' + activity_base.get('set_type') +'">');
		
		var formEntry = new WayOfTheGymja.Views.FormActivity({
			activity_base: activity_base,
			$el: el,
		})

		formInputs.append(formEntry.render().$el);
		this.inputCounter += 1;
	},

	submitForm: function (event) {
		event.preventDefault();
		debugger;
		var workout = new WayOfTheGymja.Models.Workout();
		workout.set('logged_date', Date(Date.now()));
		
		// var 
	}
})