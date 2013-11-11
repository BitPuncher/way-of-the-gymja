WayOfTheGymja.Views.WorkoutsIndex = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el
	},

  template: JST['workouts/index'],

  render: function () {
  	var workoutContent = this.template({
  		workouts: this.collection
  	});

  	this.$el.html(workoutContent);

  	return this;
  },

});