class AddFlavorToActivityBase < ActiveRecord::Migration
  def change
  	add_column :activity_bases, :flavor, :string
  end
end
