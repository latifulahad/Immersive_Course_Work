Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cats, only: [:index, :show, :new, :create, :update, :edit]
  resources :users, only: [:show, :create, :new]
  resources :cat_rental_requests, only: [:show, :new, :create] do
    member do 
      post :approve
      post :deny
    end
  end

  resource :session, only: [:new, :create, :destroy]
end
