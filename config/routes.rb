Rails.application.routes.draw do
  root "staticpages#root"

  resources :users
  resource :session, only: [:new, :create, :destroy]
  resources :staticpages, only: [:index]
end
