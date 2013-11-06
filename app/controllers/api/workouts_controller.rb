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
		@workout = Workout.find(params[:id])
		render :json => @workout
	end

	def index
		@workouts = Workout.where(:user_id => current_user.id).all

		render :json => @workouts
	end
end
