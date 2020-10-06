class Api::PhototagsController < ApplicationController 

    skip_before_action :verify_authenticity_token

    def index
        @phototags = Phototag.all

        render :index
    end 

    def show 
        @phototag = Phototag.where(tag_id: params[:tag_id])

        render :show
    end 

    def create 
        @phototag = Phototag.new(phototag_params)

        if @phototag.save 
            debugger
            render :show 
        else 
            render json: @phototag.errors.full_messages, status: 422 
        end 
    end 

    private 

    def phototag_params 
        params.require(:phototag).permit(:photo_id, :tag_id)
    end 
end 