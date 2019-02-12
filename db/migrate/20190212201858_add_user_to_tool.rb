class AddUserToTool < ActiveRecord::Migration[5.2]
  def change
    add_column :tools, :user_id, :string
  end
end
