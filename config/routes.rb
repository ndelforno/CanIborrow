Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'tools#index'
  resources :users
  resources :tools do
    resources :reservations
  end
  resources :sessions

  get 'users/:id/reservations_received', :to => 'users#reservations_received'
  get 'users/:id/reservations_done', :to => 'users#reservations_done'
end
