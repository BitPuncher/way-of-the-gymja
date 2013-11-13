class Workout < ActiveRecord::Base
  attr_accessible :logged_date, :user_id

  validates :logged_date, :user_id, :presence => true

  belongs_to :user, :inverse_of => :workouts
  has_many :activities, :inverse_of => :workout
end
