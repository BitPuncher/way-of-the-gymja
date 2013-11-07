collection @workouts, :root => "workouts", :object_root => false
# object false
# @workouts.each do |workout|
# 	node do |node|

		attributes :logged_date, :user_id, :id, :created_at, :updated_at
		child :activities, :object_root => false do
			attributes	:activity_base_id, :id, :workout_id, :created_at, :updated_at
			child :activity_base, :object_root => false do
				attributes :name, :description, :set_type
			end
			child :activity_sets, :object_root => false do
				attributes :activity_id, :distance, :duration, :intensity, :repetitions,
					:set_number, :weight, :created_at, :updated_at
			end
		end
# 	end
# end