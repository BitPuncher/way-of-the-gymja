WayOfTheGymja.Views.ActivitiesList = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el;
	},

	template: JST['tracker/list'],

	events: {
		"click .addInput": "addActivity",
	},

	addActivity: function (event) {
		debugger;
		var base_id = $(event.target).data('id');
		this.trigger('addInput',
			WayOfTheGymja.ActivityBases.findWhere({id: base_id}));
	}, //deprecated

	render: function () {
		this.$el.html('');
		this.collection.each(this.addListItem.bind(this));

		this.$el.find('.activity').draggable({revert:true});
		return this;
	},

	addListItem: function (item) {
		this.$el.append(this.template({
			activity: item,
		}));
	},
})