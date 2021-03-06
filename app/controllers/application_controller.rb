class ApplicationController < ActionController::Base
    helper_method :ensure_logged_in, :logout, :logged_in?, :current_user

    def current_user 
        @current_user = User.find_by(session_token: session[:session_token])
    end 

    def ensure_logged_in
        redirect_to root unless logged_in?
    end 

    def logged_in?
        !!current_user
    end 

    def login(user)
        session[:session_token] = user.reset_session_token!
    end 

    def logout
        current_user.reset_session_token!
        @current_user = nil 
        session[:session_token] = nil 
    end 
end
