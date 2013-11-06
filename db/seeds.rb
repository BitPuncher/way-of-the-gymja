# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActivityBase.create({ name: "Water Running", description: "To splash is to err.", set_type: "DistanceSet" })
ActivityBase.create({ name: "Stealth", description: "Ninja vanish!",
											set_type: "DurationSet" })
ActivityBase.create({ name: "Taijutsu", description: "The lotus of Konoha blooms twice.", set_type: "GeneralSet" })
ActivityBase.create({ name: "Boulder Toss", description: "Sorry I'm late, I'm afraid I got lost on the path of life.", set_type: "WeightSet" })
ActivityBase.create({ name: "Genjutsu", description: "How many times do I have to tell you? The first move is always a feint.", set_type: "RepetitionSet" })

guest = User.create({ email: "guest@mail.com", password: "password" })

guest.workouts.create({logged_date: Date.today})