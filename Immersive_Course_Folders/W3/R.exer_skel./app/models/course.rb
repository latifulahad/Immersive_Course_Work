class Course < ApplicationRecord
  belongs_to :instructor,
  primary_key: :id,
  foreign_key: :instructor_id,
  class_name: :User

  has_many :enrollments,
  primary_key: :id,
  foreign_key: :course_id,
  class_name: :Enrollment

  has_many :prerequisite,
  primary_key: :prereq_id,
  foreign_key: :id,
  class_name: :Course

  has_many :enrolled_students,
  through: :enrollments,
  source: :user
end
# Finally, add an instructor association to Course. This will point to a User object. 
# Note that Course is now related to User in two ways: instructor and enrolled_students.