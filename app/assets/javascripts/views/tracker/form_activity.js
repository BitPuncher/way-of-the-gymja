WayOfTheGymja.Views.FormActivity = Backbone.View.extend({
	initialize: function (options) {
		this.activityBase = options.activity_base;
		this.$el = options.$el;
		this.parentView = options.parentView;
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

		this.addSet(null);

		return this;
	},

	addSet: function (event) {
		if (event != null) {
			event.preventDefault();	
		}

		var inputNumber = this.$el.find('.row').length;
		var content = $('<div class="row set-row" data-setNum=' + inputNumber + '></div>');

		var template_string = 'activity_bases/' +
			this.activityBase.get('set_type').toLowerCase();

		content.append(JST[template_string]({
			setNum: inputNumber,
			activityBase: this.activityBase,
		}));

		this.$el.append(content);
	},

	removeActivity: function (event) {
		var base_id = $(event.currentTarget).data('base_id');
		this.parentView.trigger('addListItem', WayOfTheGymja.ActivityBases.findWhere({ id: base_id }));
		this.remove();
	}
})