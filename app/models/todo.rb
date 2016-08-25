# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  done       :boolean          not null
#  created_at :datetime
#  updated_at :datetime
#

class Todo < ActiveRecord::Base
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }

end
