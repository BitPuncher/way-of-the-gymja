class Repetition < ActivitySet
	attr_accessible :repetitions

	validates :repetitions, :presence => true
	validates :intensity, :weight, :distance, :duration, :inclusion => { 
		:in => [nil] }
end