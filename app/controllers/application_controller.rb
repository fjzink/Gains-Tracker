class ApplicationController < ActionController::API
    before_action :authenticate_request
    skip_before_action :authenticate_request, only: :fallback_index_html
    attr_reader :current_user

    def fallback_index_html
        render :file => 'public/index.html'
    end

    private

    def authenticate_request
        @current_user = AuthorizeApiRequest.call(request.headers).result
        render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end
end
