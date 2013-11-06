FitocracyClone::Application.routes.draw do
  devise_for :users

  resources :users, :only => [:show] do
  	namespace "api" do
  		resources :workouts, :only => [:create, :index]
  	end
  end

  namespace "api" do
  	resources :workouts, :only => [:show, :destroy]
  end
  resources :users, :only => [:index]

  root :to => "home#index"
end