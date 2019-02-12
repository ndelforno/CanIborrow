class ToolsController < ApplicationController

  def index
    @tools = Tool.all
  end

  def show
    @tool = Tool.find_by(params[:id])
  end

end
