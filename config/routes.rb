Rails.application.routes.draw do
  root :to => "application#index"
  resources :students, only: ['index', 'show']
  get '*path' => 'application#index'
end
