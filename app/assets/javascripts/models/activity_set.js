WayOfTheGymja.Models.ActivitySet = Backbone.Model.extend({
	
	MEASURABLES: ["distance", "duration", "intensity", "repetitions", "weight"],

	describe: function () {
		var strParts = [];
		var that = this;
		this.MEASURABLES.forEach(function (el) {
			var val = that.get(el);
			if (val != null) {
				if (el == "duration") {
					strParts.push(el + ": " + that.seconds_to_str(val));
				} else {
					strParts.push(el + ": " + val);
				}
			}
		});
		return strParts.join(" | ");
	},

	seconds_to_str: function (time) {
		var seconds = time % 60;
		time -= seconds;
		time /= 60;
		var minutes = time % 60;
		time -= minutes;
		time /= 60;
		var hours = time % 24;
		time -= hours;
		time /= 24;
		var days = time;

		var timeString = '';
		if (days != 0) {
			timeString = timeString + days.toString() + 'd:';
		}
		if (hours != 0) {
			timeString = timeString + hours.toString() + 'h:';
		}
		if (minutes != 0) {
			timeString = timeString + minutes.toString() + 'm:';
		}
		return timeString + seconds.toString() + 's';
	}
})