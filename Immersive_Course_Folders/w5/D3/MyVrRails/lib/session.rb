require 'json'

class Session
  
  def initialize(req)
    cookie = req.cookies['_rails_lite_app']
    if cookie 
      @content = JSON.parse(cookie)
    else
      @content = {}
    end
  end

  def [](key)
    @content[key]
  end

  def []=(key, val)
    @content[key] = val
  end

  def store_session(res)
    cookie = { path: '/', value: @content.to_json }
    res.set_cookie('_rails_lite_app', cookie)
  end
end
