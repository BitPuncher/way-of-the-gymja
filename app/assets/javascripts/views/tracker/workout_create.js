WayOfTheGymja.Views.WorkoutForm = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el;
		// this.$el.on("addInput", this.addInput);
	},

	template: JST['tracker/create'],

	// events: {
	// 	'click .addSet': "addSet",
	// },

	render: function () {
		var content = this.template({

		});

		this.$el.html(content);
		return this;
	},

	addInput: function (activity_base) {
		var form = this.$el.find('form');
		var el = $('<div class="' + activity_base.get('set_type') +'">');
		
		var formEntry = new WayOfTheGymja.Views.FormActivity({
			activity_base: activity_base,
			$el: el,
		})

		form.append(formEntry.render().$el);

		// this.trigger('click .addSet'); //this might give a weird event
	},

	// addSet: function (event) {
	// 	event.preventDefault();
	// 	debugger;
		
	// },
})