Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only: [:index, :create, :destroy]
    resources :tags, only: [:index, :create, :show]
    resources :phototags, only: [:index, :create, :show]
  end 

  root to: "static_pages#root"
end
