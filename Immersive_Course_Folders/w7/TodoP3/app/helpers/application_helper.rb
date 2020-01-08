module ApplicationHelper
    def auth_token
        token = "<input type= \'hidden\'"
        token += "name= \'authenticity_token\'"
        token += "value= \'#{h(form_authenticity_token)}\' >"
        
        token.html_safe
    end
end
