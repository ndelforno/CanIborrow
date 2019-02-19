class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :tool

  validates :reservation_time_start, presence: true
  validates :reservation_time_end, presence: true
end
