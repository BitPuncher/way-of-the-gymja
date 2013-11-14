WayOfTheGymja.Views.ActivitiesList = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el;
	},

	template: JST['tracker/list'],

	render: function () {
		this.$el.html('');
		this.collection.each(this.addListItem.bind(this));

		this.$el.find('.activity').draggable({revert:true});
		return this;
	},

	addListItem: function (item) {
		var content = this.template({
			activity: item,
		});
		content = $(content).draggable({ revert: true });
		this.$el.append(content);
	},
})