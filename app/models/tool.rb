class Tool < ApplicationRecord
  belongs_to :user
  has_many :reservations, :dependent => :delete_all

  def self.search(search)
    if search
       @tools = Tool.where("name like ?", "%#{search}%")
    else
      Tool.last(15)
    end
  end

end
