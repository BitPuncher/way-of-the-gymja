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
		var formInputs = this.$el.find('#workout-activities');
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
		
		workoutData = $(event.target).serializeJSON();

		if (typeof workoutData.workout.activities == 'undefined') {
			this.formAlert('A workout must contain at least 1 Activity.', "alert-error");
			return;
		};

		workoutData.workout.activities = workoutData.workout.activities.filter(
			function (el) {
				return true;
			}
		);

		this.removeAlert();

		var workout = new WayOfTheGymja.Models.Workout(workoutData, { parse: true });
		var that = this;

		workout.save({}, {
			success: function(response) {
				that.formAlert("Workout Saved Successfully!", "alert-success")
				var formDate = that.$el.find('#workout_date').parent().parent();
				that.$el.find('#workout-activities').html(formDate);
			},

			error: function(response) {
				that.formAlert("Invalid. You broke it", "alert-error");
			}
		});

		// var 
	},

	formAlert: function (message, classToggle) {
		this.removeAlert();
		this.$el.prepend('<div class="alert ' + classToggle +
				'"><button type="button"' +
				'class="close" data-dismiss="alert">&times;</button>' +
				'<strong>Warning!</strong> ' + message +
				'</div>');
	},

	removeAlert: function () {
		this.$el.find('.alert').remove();
	}
})