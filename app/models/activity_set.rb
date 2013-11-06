class ActivitySet < ActiveRecord::Base
  attr_accessible :set_number, :type, :activity_id

  validates :activity_id, :set_number, :type, :presence => true

  belongs_to :activity
end