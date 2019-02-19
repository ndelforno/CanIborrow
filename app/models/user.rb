class User < ApplicationRecord
  has_secure_password
  has_many :tools
  has_many :reservations

  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :password, confirmation: true

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
