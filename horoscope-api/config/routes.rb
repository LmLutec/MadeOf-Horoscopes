Rails.application.routes.draw do
  root :to => 'horoscopes#index'
  resources :dailies
  resources :horoscopes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
