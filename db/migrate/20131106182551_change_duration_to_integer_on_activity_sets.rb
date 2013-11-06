class ChangeDurationToIntegerOnActivitySets < ActiveRecord::Migration
  def up
  	remove_column :activity_sets, :duration
  	add_column :activity_sets, :duration, :integer
  end

  def down
  	remove_column :activity_sets, :duration
  	add_column :activity_sets, :duration, :date
  end
end
