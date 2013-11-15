class AddUsernameAndPointsToUser < ActiveRecord::Migration
  def change
  	add_column :users, :points_total, :integer, :null => false, :default => 0
  	add_column :users, :username, :string

  	add_index :users, :username
  end
end
