class Activity < ActiveRecord::Base
	attr_accessible :workout_id, :activity_base_id

	validates :workout_id, :activity_base_id, :presence => true
end
