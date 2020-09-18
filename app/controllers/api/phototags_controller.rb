class Api::PhotoTagsController < ApplicationController 
    def index
        @phototags = PhotoTag.all

        render :index
    end 

    def show 
        @phototag = PhotoTag.where(photo_id: params[:photo_id])

        render :show
    end 

    def create 
        @phototag = Tag.new(phototag_params)

        if @phototag.save 
            render :show 
        else 
            render json: @phototag.errors.full_messages, status: 422 
        end 
    end 

    private 

    def phototag_params 
        params.require(:tag).permit(:photo_id, :tag_id)
    end 
end 