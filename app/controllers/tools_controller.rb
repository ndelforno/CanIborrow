class ToolsController < ApplicationController

  def index
    @tools = Tool.all
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

end
