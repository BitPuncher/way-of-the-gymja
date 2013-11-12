class Api::ActivityBasesController < ApplicationController
	def index
		@activity_bases = ActivityBase.all

		render "index.json"
	end
end
