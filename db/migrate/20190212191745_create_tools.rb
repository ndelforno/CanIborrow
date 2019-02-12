class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :address

      t.timestamps
    end
  end
end
