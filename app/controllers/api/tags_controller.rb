class Api::TagsController < ApplicationController 

    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:create]

    def index
        @tags = Tag.all

        render :index
    end 

    def show 
        @tags = Tag.where(photo_id: params[:id])
        render :show
    end 

    def create 
        @tag = Tag.new(tag_params)

        if @tag.save 
            render :show 
        else 
            render json: @tag.errors.full_messages, status: 422 
        end 
    end 

    private 

    def tag_params 
        params.require(:tag).permit(:name, :photo_id)
    end 
end 