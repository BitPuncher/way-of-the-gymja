class General < ActivitySet
	attr_accessible :duration, :intensity

	validates :duration, :intensity, :presence => true
	validates :repetitions, :weight, :distance, :inclusion => { :in => [nil] }
end