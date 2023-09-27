Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Define routes for the GreetingsController (replace 'greeting' with your actual controller name)
      resources :greetings, only: [:index]  # Example: 'index' action for listing greetings
    end
  end
  
  # Define your root route
  root 'root#index'
end
