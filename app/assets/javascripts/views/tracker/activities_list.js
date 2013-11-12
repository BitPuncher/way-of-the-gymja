WayOfTheGymja.Views.ActivitiesList = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el;
	},

	template: JST['tracker/list'],

	events: {
		"click .addInput": "addActivity",
	},

	addActivity: function (event) {
		var base_id = $(event.target).data('id');
		this.trigger('addInput',
			WayOfTheGymja.ActivityBases.findWhere({id: base_id}));
	},

	render: function () {
		var content = this.template({
			activities: this.collection,
		});

		this.$el.html(content);
		return this;
	},
})