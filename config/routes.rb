Rails.application.routes.draw do
  root "staticpages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :new, :create]
    resources :reviews, only: [:index, :new, :show, :create, :edit, :update]
    resources :beers, only: [:create, :new, :index, :show]
  end

  resources :users
  resource :session, only: [:new, :create, :destroy]
  resources :staticpages, only: [:index]
end
