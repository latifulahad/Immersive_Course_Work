class UserMailer < ApplicationMailer
  default from: "sabitman@hotmail.com"

  def welcome_msg(usr)
    @usr, @url = usr, "http://sabits_cats.com/login"
    mail = "suravi@aol.com"
    mail(to: mail, subject: "Welcome to Sabit's cat rental :)")
  end
end
