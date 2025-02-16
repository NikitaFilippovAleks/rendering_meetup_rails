Rails.application.routes.draw do
  resources :products

  get "/counter", to: "counter#index"

  # Defines the root path route ("/")
  root "home#index"
end
