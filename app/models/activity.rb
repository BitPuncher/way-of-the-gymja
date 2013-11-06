class Activity < ActiveRecord::Base
	attr_accessible :workout_id, :activity_base_id

	validates :workout_id, :activity_base_id, :presence => true

	belongs_to :workout
	belongs_to :activity_base
	has_many :activity_sets # , :class_name => self.activity_base.set_type
end