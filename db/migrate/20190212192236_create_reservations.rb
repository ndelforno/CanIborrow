class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer, :tool_id
      t.integer, :user_id
      t.datetime, :reservation_time_start
      t.datetime, :reservation_time_end
      t.date :date

      t.timestamps
    end
  end
end
