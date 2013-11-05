class Workout < ActiveRecord::Base
  attr_accessible :logged_date, :user_id

  validates :logged_date, :user_id, :presence => true

  belongs_to :user
  has_many :activities
end
