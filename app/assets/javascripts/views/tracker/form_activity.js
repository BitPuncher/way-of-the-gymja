WayOfTheGymja.Views.FormActivity = Backbone.View.extend({
	initialize: function (options) {
		this.activityBase = options.activity_base;
		this.$el = options.$el;
	},

	template: JST['tracker/form_activity'],

	events: {
		"click .addSet": "addSet",
		"click .removeActivity": "removeActivity",
	},

	render: function () {
		this.$el.find('.activity_header')
		this.$el.append(
			this.template({
				activityBase: this.activityBase,
			})
		);

		this.trigger('.addSet'); //doesn't do anything

		return this;
	},

	addSet: function (event) {
		event.preventDefault();

		var inputNumber = this.$el.find('.row').length;
		var content = $('<div class="row" data-setNum=' + inputNumber + '></div>');

		var template_string = 'activity_bases/' +
			this.activityBase.get('set_type').toLowerCase();

		content.append(JST[template_string]({
			setNum: inputNumber,
			activityBase: this.activityBase,
		}));

		this.$el.append(content);
	},

	removeActivity: function () {
		this.remove();
	}
})