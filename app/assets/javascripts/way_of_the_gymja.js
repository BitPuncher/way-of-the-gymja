window.WayOfTheGymja = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var workoutRouter = new WayOfTheGymja.Routers.Workouts({
  		topLevelElement: $('.content')
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  WayOfTheGymja.initialize();
});
