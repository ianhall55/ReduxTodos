# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.create!( title: "first", body: "this is the first", done: true )
Todo.create!( title: "second", body: "this is the second", done: true )
Todo.create!( title: "third", body: "this is the third", done: true )
