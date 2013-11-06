class Api::UsersController < ApplicationController
	def show
		@user = User.find(paramsk[:id])
		render :json => @user
	end

	def index
		@users = User.all

		render :json => @users
	end
end