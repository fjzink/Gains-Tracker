Rails.application.routes.draw do
  resources :users
  post 'authenticate', to: 'authentication#authenticate'
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
