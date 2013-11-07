FitocracyClone.Views.WorkoutsIndex = Backbone.View.extend({
	initialize: function (options) {
		this.$el = options.$el
	},

  template: JST['workouts/index'],

  render: function () {
  	var workoutContent = this.template({
  		workouts: this.collection
  	});

  	this.$el.html(workoutContent);

  	//here do activity rendering
  	// debugger

  	//after that do set rendering


  	return this;
  },

});