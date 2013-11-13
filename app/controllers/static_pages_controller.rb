class StaticPagesController < ApplicationController
	before_filter :authenticate_user!

	def root
	end

	def track
	end
end