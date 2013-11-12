WayOfTheGymja.Views.WorkoutCreate = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el;
		this.date = options.date;
	},

	template: JST['tracker/create'],

	events: {
		"submit form": "submitForm",
	},

	render: function () {
		var content = this.template({
			date: this.date,
		});

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
		
		workoutData = $(event.target).serializeJSON()['workout'];
		if (typeof workoutData.activities == 'undefined') {
			this.formValidationError('A workout must contain at least 1 Activity.');
			return;
		};


		workoutData.activities = workoutData.activities.filter(function (el) {
			return true;
		});

		for (var i = 0; i < workoutData.activities.length; i++) {
			if (typeof workoutData.activities[i].activity_sets === 'undefined') {
				this.formValidationError('All activities must have at least 1 set.');
				return;
			}
		} // might be unnecessary to check now.

		this.removeAlert();

		var workout = new WayOfTheGymja.Models.Workout(workoutData, { parse: true });
		
		debugger;

		// var 
	},

	formValidationError: function (error) {
		this.removeAlert();
		this.$el.prepend('<div class="alert"><button type="button"' +
				'class="close" data-dismiss="alert">&times;</button>' +
				'<strong>Warning!</strong> ' + error +
				'</div>');
	},

	removeAlert: function () {
		this.$el.find('.alert').remove();
	}
})