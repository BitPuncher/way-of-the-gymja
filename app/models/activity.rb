class Activity < ActiveRecord::Base
	attr_accessible :workout_id, :activity_base_id

	validates :activity_base_id, :presence => true

	belongs_to :workout, :inverse_of => :activities
	belongs_to :activity_base
	has_many :activity_sets, :inverse_of => :activity
end