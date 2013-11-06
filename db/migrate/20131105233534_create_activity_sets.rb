class CreateActivitySets < ActiveRecord::Migration
  def change
    create_table :activity_sets do |t|
    	t.integer :activity_id, :null => false

    	t.string :type, :null => false
    	t.integer :set_number, :null => false
    	t.time :duration
    	t.integer :repetitions
    	t.string :intensity
    	t.integer :weight
    	t.decimal :distance

      t.timestamps
    end

    add_index :activity_sets, :activity_id
    add_index :activity_sets, :type
  end
end
