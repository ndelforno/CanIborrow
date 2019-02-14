class Tool < ApplicationRecord
  belongs_to :user
  has_many :reservations

  def self.search(search)
    p search
    if search
       @tools = Tool.where("name like ?", "%#{search}%")
    else
      Tool.all
    end
  end

end
