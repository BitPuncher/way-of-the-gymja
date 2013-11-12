class Distance < ActivitySet
	attr_accessible :duration, :distance

	validates :duration, :distance, :presence => true
	validates :repetitions, :weight, :intensity, :inclusion => {
		:in => [nil] }
	
end