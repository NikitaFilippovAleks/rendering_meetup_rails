Rails.application.routes.draw do
  resource :counter, only: [:show] do
    patch :increment
    patch :decrement
  end
  get "/counter", to: "counters#show"
  resources :products

  # Defines the root path route ("/")
  root "home#index"
end
