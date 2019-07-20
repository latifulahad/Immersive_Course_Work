Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :show, :create]
  resources :bands, only: [:show, :index, :new, :edit, :create, :update, :destroy]
  resources :albums
  resource :session, only: [:new, :create, :destroy]
  
  resources :bands do
    resources :albums, only: [:new]
  end
end