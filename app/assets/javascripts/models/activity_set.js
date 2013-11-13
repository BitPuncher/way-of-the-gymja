WayOfTheGymja.Models.ActivitySet = Backbone.Model.extend({
	
	MEASURABLES: ["distance", "duration", "intensity", "repetitions", "weight"],

	describe: function () {
		var strParts = [];
		var that = this;
		this.MEASURABLES.forEach(function (el) {
			var val = that.get(el);
			if (val != null) {
				strParts.push(el + ": " + val);
			}
		});
		return strParts.join(" | ");
	}
})