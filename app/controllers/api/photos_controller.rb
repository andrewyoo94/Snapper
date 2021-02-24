class Api::PhotosController < ApplicationController 

    # protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    
    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def index
        @photos = Photo.all
    end

    def create
        @photo = Photo.new(photo_params)
        @photo.photographer_id = current_user.id

        if @photo.save
            render :show
        else  
            render json: @photo.errors.full_messages, status: 422
        end 
    end 

    def show 
        @photo = Photo.find(params[:id])
        if @photo 
            render :show
        else  
            render json: @photo.errors.full_messages, status: 404
        end 
    end 

    def update
        @photo = Photo.find(photo_params[:id])
        
        if @photo.update(photo_params)
            render :show
        else
            render json: @photo.errors.full_messages, status: 404
        end
    end

    def destroy
        @photo = Photo.find(params[:id])

        if @photo.photographer_id === current_user.id
            @photo.destroy
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :id, :image)
    end 
    
end