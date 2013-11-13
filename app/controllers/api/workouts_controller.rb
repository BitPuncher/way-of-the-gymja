class Api::WorkoutsController < ApplicationController
	respond_to :json

	def create
		@activities = params[:workout].delete(:activities)
		@workout = Workout.new(params[:workout])
		@activities.each do |activity|
			@activity_sets = activity.delete(:activity_sets)
			newActivity = @workout.activities.build(activity)
			setType = newActivity.activity_base.set_type.constantize
			@activity_sets.each do |activity_set|
				wrong_set = newActivity.activity_sets.build()
				right_set = wrong_set.becomes(setType)
				right_set.assign_attributes(activity_set)
				newActivity.activity_sets[newActivity.
					activity_sets.index(wrong_set)] = right_set
			end
		end

		@workout.user_id = current_user.id

		if @workout.save
			render "api/workouts/show.json", :status => :ok
		else
			render :json => @workout.activities.first.errors.full_messages, 
				:status => :unprocessable_entity
		end
	end

	def new
		@workout = Workout.new

		render :json => @workout
	end

	def show
		@workout = Workout.includes(:activities => [:activity_sets, :activity_base])
			.find(params[:id])
		render :json => @workout
	end

	def index
		@workouts = Workout.includes(:activities => [:activity_sets, :activity_base])
			.where(:user_id => current_user.id).all

		render "api/workouts/index.json"
	end
end
