WayOfTheGymja::Application.routes.draw do
  devise_for :users

  namespace "api" do
    scope "users/:user_id/" do
  		resources :workouts, :only => [:index]
    end

    resources :workouts, :only => [:show, :destroy, :create]
    resources :activity_bases, :only => [:index]
  end

  resources :users, :only => [:index, :show]

  get "track", :to => "static_pages#track"
  root :to => "static_pages#root"
end