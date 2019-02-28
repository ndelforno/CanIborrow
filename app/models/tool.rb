class Tool < ApplicationRecord
  belongs_to :user
  has_many :reservations

  def self.search(search)
    if search
       @tools = Tool.where("name like ?", "%#{search}%")
    else
      Tool.last(14)
    end
  end

end
