Rails.application.routes.draw do
  root "staticpages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :new, :create]
    resources :reviews, only: [:index, :new, :show, :create, :edit, :update, :destroy]
    resources :beers, only: [:create, :new, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :comments
    resources :toasts
    resources :friendrequests, only: [:create, :index, :destroy]
    resources :friendships, only: [:create, :index]
  end


  resources :staticpages, only: [:index]
end
