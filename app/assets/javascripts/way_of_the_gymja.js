window.WayOfTheGymja = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var workoutRouter = new WayOfTheGymja.Routers.Workouts({
  		topLevelElement: $('#backbone-content')
  	});
  	Backbone.history.start();
  }
};

// $(document).ready(function(){
//   WayOfTheGymja.initialize();
// });