window.FitocracyClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var workoutRouter = new FitocracyClone.Routers.Workouts({
  		topLevelElement: $('.content')
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  FitocracyClone.initialize();
});
