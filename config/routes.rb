FitocracyClone::Application.routes.draw do
  devise_for :users

  namespace "api" do
    scope "users/:user_id/" do
  		resources :workouts, :only => [:create, :index]
    end
  end

  namespace "api" do
  	resources :workouts, :only => [:show, :destroy]
  end

  resources :users, :only => [:index, :show]

  root :to => "home#index"
end