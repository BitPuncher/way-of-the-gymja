class Weight < ActivitySet
	attr_accessible :weight, :repetitions

	validates :weight, :repetitions, :presence => true
	validates :intensity, :distance, :duration, :inclusion => { :in => [nil] }
end