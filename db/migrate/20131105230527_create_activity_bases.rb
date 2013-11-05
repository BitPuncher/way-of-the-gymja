class CreateActivityBases < ActiveRecord::Migration
  def change
    create_table :activity_bases do |t|
    	t.string :set_type, :null => false
    	t.string :name, :null => false
    	t.string :description, :null => false

      t.timestamps
    end

    add_index :activity_bases, :name, :unique => true
  end
end
