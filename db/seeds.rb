# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
	ActivityBase.create({ name: "Water Running", 
		description: "To splash is to err.", set_type: "Distance" })
	ActivityBase.create({ name: "Stealth", description: "Ninja vanish!",
		set_type: "Duration" })
	ActivityBase.create({ name: "Taijutsu", 
		description: "The lotus of Konoha blooms twice.", set_type: "General" })
	ActivityBase.create({ name: "Boulder Toss", 
		description: "Sorry I'm late, I'm afraid I got lost on the path of life.",
		set_type: "Weight" })
	ActivityBase.create({ name: "Genjutsu",
		description: "How many times do I have to tell you? The first move is
		 always a feint.", set_type: "Repetition" })

	guest = User.create({ email: "guest@mail.com", password: "password",
		gender: "male", height: 66, birthday: "1985-09-01" })

	# First Workout

	workout = guest.workouts.create({logged_date: Date.today})

	act1 = workout.activities.create({ activity_base_id:1 })
	act2 = workout.activities.create({ activity_base_id:2 })
	act3 = workout.activities.create({ activity_base_id:5 })

	act1.activity_sets << act1.activity_base.set_type.constantize.create({
		distance:50, duration:300, set_number:1 })
	act1.activity_sets << act1.activity_base.set_type.constantize.create({
		distance:100, duration:450, set_number:2 })
	act1.activity_sets << act1.activity_base.set_type.constantize.create({
		distance:50, duration:300, set_number:3 })

	act2.activity_sets << act2.activity_base.set_type.constantize.create({
		duration:300, set_number:1 })
	act2.activity_sets << act2.activity_base.set_type.constantize.create({
		duration:3600, set_number:2 })

	act3.activity_sets << act3.activity_base.set_type.constantize.create({
		repetitions:15, set_number:1 })
	act3.activity_sets << act3.activity_base.set_type.constantize.create({
		repetitions:15, set_number:2 })

	# Second Workout

	workout = guest.workouts.create({logged_date: (Date.today + 1)})

	act1 = workout.activities.create({ activity_base_id:3 })
	act2 = workout.activities.create({ activity_base_id:4 })

	act1.activity_sets << act1.activity_base.set_type.constantize.create({
		intensity:2, duration:200, set_number:1 })

	act2.activity_sets << act2.activity_base.set_type.constantize.create({
		repetitions:15, weight:5, set_number:1 })
	act2.activity_sets << act2.activity_base.set_type.constantize.create({
		repetitions:15, weight:5, set_number:2 })

end