WayOfTheGymja.Views.FormActivity = Backbone.View.extend({
	initialize: function (options) {
		this.activity_base = options.activity_base;
		this.$el = options.$el;
	},

	template: JST['tracker/form_activity'],

	events: {
		"click .addSet": "addSet",
	},

	render: function () {
		this.$el.append(
			this.template({
				activity_base: this.activity_base,
			})
		);

		return this;
	},

	addSet: function (event) {
		event.preventDefault();

		// debugger;
		var inputNumber = this.$el.find('.row').length;
		var content = $('<div class="row" data-setNum=' + inputNumber + '></div>');

		var template_string = 'activity_bases/' +
			this.activity_base.get('set_type').toLowerCase();

		content.append(JST[template_string]({
			setNum: inputNumber,
			base_id: this.activity_base.id,
		}));

		this.$el.append(content);
	},
})