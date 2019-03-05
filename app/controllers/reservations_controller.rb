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
    @reservation.status = "pending"
    if @reservation.save
      flash[:notice] = "Material booked !"
      redirect_to user_path(current_user)
    end
  end

  def edit
    @reservation = Reservation.find(params[:id])
  end

  def update
    @reservation = Reservation.find(params[:id])
    @reservation.status = params[:status]
    if @reservation.save
      redirect_to "/users/#{current_user.id}/reservations"
    end
  end


  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    redirect_to user_path(current_user)
  end

end
