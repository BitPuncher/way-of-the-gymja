class AddClanToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :clan, :string

  	add_index :users, :clan
  end
end
