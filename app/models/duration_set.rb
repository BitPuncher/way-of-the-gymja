class DurationSet < ActivitySet
	attr_accessible :duration

	validates :duration, :presence => true
	validates :repetitions, :weight, :intensity, :distance, :inclusion => {
		:in => [nil] }
	
end