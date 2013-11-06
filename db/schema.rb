# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131106182551) do

  create_table "activities", :force => true do |t|
    t.integer  "workout_id",       :null => false
    t.integer  "activity_base_id", :null => false
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  add_index "activities", ["activity_base_id"], :name => "index_activities_on_activity_base_id"
  add_index "activities", ["workout_id"], :name => "index_activities_on_workout_id"

  create_table "activity_bases", :force => true do |t|
    t.string   "set_type",    :null => false
    t.string   "name",        :null => false
    t.string   "description", :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "activity_bases", ["name"], :name => "index_activity_bases_on_name", :unique => true

  create_table "activity_sets", :force => true do |t|
    t.integer  "activity_id", :null => false
    t.string   "type",        :null => false
    t.integer  "set_number",  :null => false
    t.integer  "repetitions"
    t.string   "intensity"
    t.integer  "weight"
    t.decimal  "distance"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "duration"
  end

  add_index "activity_sets", ["activity_id"], :name => "index_activity_sets_on_activity_id"
  add_index "activity_sets", ["type"], :name => "index_activity_sets_on_type"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0,  :null => false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "workouts", :force => true do |t|
    t.datetime "logged_date", :null => false
    t.integer  "user_id",     :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

end
