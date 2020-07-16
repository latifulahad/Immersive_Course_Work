require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    subject(:usr) { User.new(name: "Sabit", email: "sabitman@aol.com", password: "sabitman3") }

    it "#show" do
        get :show, :params => { id: 1 }
        expect(response).to render_template("show")
    end

end
