class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :tool

  validates :reservation_time_start, presence: true
  validates :reservation_time_end, presence: true
  validate :end_date_after_start_date

  def end_date_after_start_date
    return if reservation_time_start.blank? || reservation_time_end.blank?

     if reservation_time_end < reservation_time_start
       errors.add(:reservation_time_end, "must be after the start date")
     end
  end

  def numbers_of_days
    diff = self.reservation_time_end - self.reservation_time_start
    days = (diff.to_f) /1.day
    days.floor
  end

end
