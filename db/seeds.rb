# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
	ActivityBase.create({ name: "Water Running", 
		flavor: "To splash is to err. -The Master", set_type: "Distance",
		description: "Run like a ninja over the surface of the water" })
	ActivityBase.create({ name: "Stealth", flavor: "Ninja vanish! -The Master",
		set_type: "Duration",
		description: "Blend into the shadows, avoiding all detection." })
	ActivityBase.create({ name: "Taijutsu", 
		flavor: "The lotus of Konoha blooms twice. -The Master", set_type: "General",
		description: "Focus your ki into stronger punches and kicks." })
	ActivityBase.create({ name: "Boulder Toss", 
		flavor: "Sorry I'm late, I'm afraid I got lost on the path of life. -The Master",
		set_type: "Weight",
		description: "Train strength and agility by hurling large bouldrs." })
	ActivityBase.create({ name: "Genjutsu",
		flavor: "How many times do I have to tell you? The first move is
		 always a feint. -The Master", set_type: "Repetition",
		 description: "Train the mind and practice the art of illusion and distraction" })

	guest = User.create({ email: "guest@mail.com", password: "password",
		gender: "male", height: 66, birthday: "1985-09-01", clan: "Koga", 
		username:"NinjaGuest" })

	# First Workout

	workout = guest.workouts.create({logged_date: Date.today})

	act1 = workout.activities.create({ activity_base_id:1 })
	act2 = workout.activities.create({ activity_base_id:2 })
	act3 = workout.activities.create({ activity_base_id:5 })

	act1.activity_base.set_type.constantize.create({
		distance:50, duration:300, set_number:1, activity_id:act1.id })
	act1.activity_base.set_type.constantize.create({
		distance:100, duration:450, set_number:2, activity_id:act1.id })
	act1.activity_base.set_type.constantize.create({
		distance:50, duration:300, set_number:3, activity_id:act1.id })

	act2.activity_base.set_type.constantize.create({
		duration:300, set_number:1, activity_id:act2.id })
	act2.activity_base.set_type.constantize.create({
		duration:3600, set_number:2, activity_id:act2.id })

	act3.activity_base.set_type.constantize.create({
		repetitions:15, set_number:1, activity_id:act3.id })
	act3.activity_base.set_type.constantize.create({
		repetitions:15, set_number:2, activity_id:act3.id })

	# Second Workout

	workout = guest.workouts.create({logged_date: (Date.today + 1)})

	act1 = workout.activities.create({ activity_base_id:3 })
	act2 = workout.activities.create({ activity_base_id:4 })

	act1.activity_base.set_type.constantize.create({
		intensity:2, duration:200, set_number:1, activity_id:act1.id })

	act2.activity_base.set_type.constantize.create({
		repetitions:15, weight:5, set_number:1, activity_id:act2.id })
	act2.activity_base.set_type.constantize.create({
		repetitions:15, weight:5, set_number:2, activity_id:act2.id })

end