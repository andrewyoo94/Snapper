class Api::TagsController < ApplicationController 

    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:create]

    def index
        if( params[:id] )
            @tags = Tag.where(photo_id: params[:id])
        else 
            @tags = Tag.all
        end
        
        render :index
    end 

    def show 
        @tag = Tag.find(params[:id])
        if @tag 
            render :show
        else  
            render json: @tag.errors.full_messages, status: 404
        end 
    end 

    def create 
        @tag = Tag.new(tag_params)
        if @tag.save 
            debugger
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