class DistanceSet < ActivitySet
	attr_accessible :duration, :distance

	validates :duration, :distance, :presence => true
	validats :repetitions, :weight, :intensity, :duration, :inclusion => {
		:in => [nil] }
	
end