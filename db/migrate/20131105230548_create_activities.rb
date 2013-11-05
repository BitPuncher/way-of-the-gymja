class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
    	t.integer :workout_id, :null => false
    	t.integer :activity_base_id, :null => false

      t.timestamps
    end

    add_index :activities, :workout_id
    add_index :activities, :activity_base_id
  end
end