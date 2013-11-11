class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :gender, :birthday, :height

  validates :gender, :inclusion => { :in => ["male", "female"] }
  validates :height, :numericality => { :greater_than => 0, :only_integer => true}

  has_many :workouts
end
