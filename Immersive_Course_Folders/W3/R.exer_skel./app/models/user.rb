class User < ApplicationRecord
  has_many :enrollments,
  primary_key: :id,
  foreign_key: :student_id,
  class_name: :Enrollment

  has_many :courses,
  through: :enrollments,
  source: :course
end

# Add associations for enrollments and enrolled_courses. This might take a little bit of thinking.

# You will know you have succeeded when you can execute User.first.enrollments and 
# User.first.enrolled_courses in the rails console. These commands should return the 
# user's enrollments and enrolled courses.