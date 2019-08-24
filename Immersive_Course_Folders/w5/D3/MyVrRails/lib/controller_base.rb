require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params, :session

  def initialize(req, res, route_params = {})
    @req, @res = req, res
    @already_built_response = []
  end

  def already_built_response?(content)
    if @already_built_response.include?(content)
      raise "Double Render" 
    else
      true
    end
  end

  def redirect_to(url)
    @res.status = 302
    @res['Location'] = url
    @session.store_session(@res)
  end

  def render_content(content, content_type)
    already_built_response?(content)

    @already_built_response << content
    @res.write(content)
    @res['Content-Type'] = content_type
    @session.store_session(@res)
  end

  def render(template_name)
    dir_path = File.dirname(__FILE__)

    fl_nm = File.join( dir_path, "..", "views", self.class.name.underscore, "#{template_name}.html.erb")

    content = File.read(fl_nm)

    render_content(ERB.new(content).result(binding),"text/html")
  end

  def session
    @session ||= Session.new(req)
  end

  def invoke_action(name)
    self.send(name)
    #Im instructed to call #render, but constraint to varify dups are already present within render_cont...
  end
end
