class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
    	t.datetime :logged_date, :null => false
    	t.integer :user_id, :null => false

      t.timestamps
    end
  end
end