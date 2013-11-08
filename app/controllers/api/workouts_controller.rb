class Api::WorkoutsController < ApplicationController
	respond_to :json

	def create
		@workout = Workout.new(params[:workout])

		if @workout.save
			render :json => @workout
		else
			render :json => @workout.errors.full_messages
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
