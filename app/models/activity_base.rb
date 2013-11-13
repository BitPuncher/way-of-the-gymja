class ActivityBase < ActiveRecord::Base
  attr_accessible :set_type, :name, :description, :flavor

  validates :set_type, :name, :description, :presence => true
  validates :name, :uniqueness => true

  has_many :activities
end