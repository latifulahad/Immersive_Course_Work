# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  User.destroy_all
  Poll.destroy_all
  Question.destroy_all
  AnswerChoice.destroy_all
  Response.destroy_all

  u1 = User.create!(username: 'Sabit Ahad')
  u2 = User.create!(username: 'Suravi Ahad')
  u3 = User.create!(username: 'Sanam Mariam')
  u4 = User.create!(username: 'Nafiz Donna')
  u5 = User.create!(username: 'Rashidul Bhuiyan')

  p1 = Poll.create!(title: 'Cats Poll', author_id: u1.id)

  q1 = Question.create!(text: 'What Cat Is Cutest?', poll_id: p1.id)
  ac1 = AnswerChoice.create!(text: 'Tony', question_id: q1.id)
  ac2 = AnswerChoice.create!(text: 'Ninja', question_id: q1.id)
  ac3 = AnswerChoice.create!(text: 'Blacky', question_id: q1.id)

  q2 = Question.create!(text: 'What do cats like the most?', poll_id: p1.id)
  ac4 = AnswerChoice.create!(text: 'Sleep', question_id: q2.id)
  ac5 = AnswerChoice.create!(text: 'Playing', question_id: q2.id)
  ac6 = AnswerChoice.create!(text: 'Eating', question_id: q2.id)

  q3 = Question.create!(text: 'Which Toy Is Most Fun?', poll_id: p1.id)
  ac7 = AnswerChoice.create!(text: 'String', question_id: q3.id)
  ac8 = AnswerChoice.create!(text: 'Ball', question_id: q3.id)
  ac9 = AnswerChoice.create!(text: 'Bird', question_id: q3.id)

  r1 = Response.create!(
    respondent_id: u2.id,
    answer_choice_id: ac1.id
  )

  r2 = Response.create!(
    respondent_id: u2.id,
    answer_choice_id: ac6.id
  )

  r3 = Response.create!(
    respondent_id: u2.id,
    answer_choice_id: ac9.id
  )

  r4 = Response.create!(
    respondent_id: u3.id,
    answer_choice_id: ac1.id
  )

  r5 = Response.create!(
    respondent_id: u3.id,
    answer_choice_id: ac4.id
  )

  r6 = Response.create!(
    respondent_id: u3.id,
    answer_choice_id: ac8.id
  )

  r7 = Response.create!(
    respondent_id: u4.id,
    answer_choice_id: ac2.id
  )

  r8 = Response.create!(
    respondent_id: u4.id,
    answer_choice_id: ac5.id
  )

  r9 = Response.create!(
    respondent_id: u4.id,
    answer_choice_id: ac8.id
  )

  r10 = Response.create!(
    respondent_id: u5.id,
    answer_choice_id: ac2.id
  )

  r11 = Response.create!(
    respondent_id: u5.id,
    answer_choice_id: ac4.id
  )

  r12 = Response.create!(
    respondent_id: u5.id,
    answer_choice_id: ac8.id
  )
end