require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:usr) { User.new( name: "Nafiz", email: "nafiz@aol.com", password: "nafizman3") }

  let(:subsc) { Sub.new( title: "dogs", description: "Cats are lame!", moderator: usr) }

  context "Validations tests" do 
    it "Name is attr is provided" do
      user = User.new(email: "sabitman@aol.com").save
      expect(user).to eq(false)
    end

    it "Email is unique" do
      user1 = User.new(name: "Rash", email: "suravi@aol.com", password: "rash143")
      user2 = User.new(name: "Sabit", email: "suravi@aol.com", password: "nafizman3")
      expect(User.all).to_not include(user2)
    end

    it "Password length is >= 4 char" do
      # user =  User.new(name: "Omar", email: "omar@aol.com", password: "sabitman3").save
      # expect(user).to eq(true)
      user =  User.new(name: "Omar", email: "omar@aol.com", password: "lal").save
      expect(user).to eq(false)
    end
  end

  context "Business Logic" do
    it "#reset_session_tkn!" do
      usr.reset_session_tkn!
      dataEtr = usr.session_token
      expect(dataEtr).to_not be_empty
    end

    it "#is_pass?" do
      expect(usr.is_pass?("nafizman3")).to eq(true)
    end
  end

  context "Associations" do
    it("#subs") { should have_many(:subs) } 
    
    it("#post") { should have_many(:posts) }

    it("#checking SCOPE") do
      usr.subs << subsc
      expect(usr.subs).to include(subsc)
    end

  end

end
