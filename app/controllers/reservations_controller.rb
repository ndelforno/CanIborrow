class ReservationsController < ApplicationController

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new
    @tool = Tool.find(params[:tool_id])
    @reservation.user = current_user
    @reservation.date = params[:reservation][:date]
    @reservation.reservation_time_start = Time.new(params[:reservation]["reservation_time_start(1i)"].to_i,
      params[:reservation]["reservation_time_start(2i)"].to_i,
      params[:reservation]["reservation_time_start(3i)"].to_i,
      params[:reservation]["reservation_time_start(4i)"].to_i,
      params[:reservation]["reservation_time_start(5i)"].to_i)
    @reservation.reservation_time_end = Time.new(params[:reservation]["reservation_time_end(1i)"].to_i,
      params[:reservation]["reservation_time_end(2i)"].to_i,
      params[:reservation]["reservation_time_end(3i)"].to_i,
      params[:reservation]["reservation_time_end(4i)"].to_i,
      params[:reservation]["reservation_time_end(5i)"].to_i)
    @reservation.tool_id = @tool.id
    @reservation.status = "pending"
    if @reservation.save
      redirect_to tool_path(@tool)
    end
  end

  def self.reservation_approved
    self.status = "approved"
  end
  
end
