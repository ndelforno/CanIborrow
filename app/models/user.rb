class User < ApplicationRecord
  has_secure_password
  has_many :tools
  has_many :reservations
  
end
