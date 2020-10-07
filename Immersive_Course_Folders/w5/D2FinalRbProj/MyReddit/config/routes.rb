Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  resources :static_pages, only: [:root]

  resources :users, only: [:new, :show, :create, :edit, :update, :destroy]

  resources :subs, only: [:index, :new, :show, :create, :edit, :update, :destroy] do
    resources :posts, only: [:new, :edit, :show]
  end

  resources :posts, only: [:show, :create, :update, :destroy] do
    resources :comments, only: [:new]
  end

  resources :comments, only: [:index, :new, :create, :show]
  
  resource :session, only: [:new, :create, :destroy]
end
