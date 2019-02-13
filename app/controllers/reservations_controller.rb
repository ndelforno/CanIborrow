class ReservationsController < ApplicationController

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new
    @reservation.user = current_user
    @reservation.date = params[:reservation][:date]
    @reservation.reservation_time_start = params[:reservation][:reservation_time_start]
    @reservation.reservation_time_end = params[:reservation][:reservation_time_end]
    @tool = Tool.find_(params[:tool_id])
    @reservation.tool = @tool
    if @reservation.save
      redirect_to tool_path(@tool)
    end
  end
end
