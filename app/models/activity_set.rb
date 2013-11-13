class ActivitySet < ActiveRecord::Base
  attr_accessible :set_number, :type, :activity_id

  validates :set_number, :type, :presence => true

  belongs_to :activity, :inverse_of => :activity_sets
end