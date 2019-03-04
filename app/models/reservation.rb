class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :tool

  validates :reservation_time_start, presence: true
  validates :reservation_time_end, presence: true
  validate :end_date_after_start_date

  def end_date_after_start_date
     return if reservation_time_start.blank? || reservation_time_end.blank?

     if reservation_time_end < reservation_time_end
       errors.add(:end_date, "must be after the start date")
     end
  end

end
