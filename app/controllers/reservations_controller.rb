class ReservationsController < ApplicationController

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new
    @tool = Tool.find(params[:tool_id])
    @reservation.user = current_user
    @reservation.date = params[:reservation][:date]
    @reservation.reservation_time_start = params[:reservation][:reservation_time_start]
    @reservation.reservation_time_end = params[:reservation][:reservation_time_end]
    @reservation.tool_id = @tool.id
    if @reservation.save
      redirect_to tool_path(@tool)
    end
  end
end
