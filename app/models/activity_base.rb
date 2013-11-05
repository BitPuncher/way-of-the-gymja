class ActivityBase < ActiveRecord::Base
  attr_accessible :set_type, :name, :description

  validates :set_type, :name, :description, :presence => true
  validates :name, :uniqueness => true
end