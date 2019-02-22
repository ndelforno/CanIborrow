class ToolsController < ApplicationController

  def index
    @tools = Tool.search(params[:search])
  end

  def show
    @tool = Tool.find(params[:id])
    @reservation = Reservation.new
  end

  def new
    @tool = Tool.new
  end

  def create
    @tool = Tool.new
    @tool.name = params[:tool][:name]
    @tool.description = params[:tool][:description]
    @tool.price = params[:tool][:price]
    @tool.address = params[:tool][:address]
    @tool.user = current_user
    if @tool.save
      redirect_to tool_path(@tool)
    else
      render :new
    end

  end

  def destroy
    @tool = Tool.find(params[:id])
    @tool.destroy
    redirect_to user_path(current_user)
  end

  def tool_params
    params.require(:tool).permit(:name, :description, :tool_id, :user_id, :search)
  end

end
