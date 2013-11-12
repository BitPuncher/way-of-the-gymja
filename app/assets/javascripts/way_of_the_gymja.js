window.WayOfTheGymja = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	// new WayOfTheGymja.Routers.Workouts({
  	// 	topLevelElement: $('#backbone-content')
  	// });
  	Backbone.history.start();
  }
};

// $(document).ready(function(){
//   WayOfTheGymja.initialize();
// });