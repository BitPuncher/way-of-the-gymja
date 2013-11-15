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
		this.$el.append(content);
		this.$el.html(this.$el.children().sort(this.compareActivities));
		this.$el.children().draggable({ revert: true });
	},

	compareActivities: function (act1, act2) {
		return $(act1).data('id') - $(act2).data('id');
	},
})