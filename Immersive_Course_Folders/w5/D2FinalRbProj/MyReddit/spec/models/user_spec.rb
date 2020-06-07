require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:usr) { User.new(name: "Nafiz", email: "nafiz@aol.com", password: "nafizman3") }

  context "Validations tests" do 
    it "Name is attr is provided" do
      user = User.new(email: "sabitman@aol.com").save
      expect(user).to eq(false)
    end

    it "Email is unique" do
      user1 = User.new(name: "Rash", email: "suravi@aol.com", password: "rash143").save
      expect { User.new(name: "Sabit", email: "suravi@aol.com", password: "sabit143").save }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it "Password length is < 4 char" do
      user =  User.new(name: "Omar", email: "omar@aol.com", password: "sabitman3").save
      expect(user).to eq(true)
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
    let(:subsc) { Sub.new(title: "Dogs", description: "Dogs are better", moderator: usr.id) }

    it "#subs" do
      usr.subs << subsc
      expect(usr.subs).to include(subsc)
    end

    it "#author of Subs 2 gauge rspec scope" do
      expect(subsc.author).to eq(usr)
    end
  end

end
