class UsersController < ApplicationController
	before_filter :init_points_total, :only => [:create]

	def show
		@user = User.find(params[:id])

		render :show
	end

	def index
		@users = User.all

		render :index
	end

	def init_points_total
		@user.points_total = 0;
	end
end