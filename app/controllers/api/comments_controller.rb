class Api::CommentsController < ApplicationController 

    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:create]

    def index
        @comments = Comment.where(photo_id: params[:photo_id]) 

        render :index
    end 

    def create 
        @comment = Comment.new(comment_params)

        @comment.user_id = current_user.id 

        if @comment.save 
            render :show 
        else  
            render json: @comment.errors.full_messages, status: 422
        end     
    end 

    def destroy 
        @comment = current_user.comments.find(params[:id])

        if @comment
            @comment.destroy
            render json: { "id": @comment.id, "photo_id": @comment.photo_id }
        else
            render json: ['Comment not found'], status: 404
        end
    end 

    private 

    def comment_params
        params.require(:comment).permit(:id, :user_id, :photo_id, :body, :created_at, :updated_at)
    end 
end