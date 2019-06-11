require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor :foreign_key, :class_name, :primary_key
  
  def model_class
    @class_name.constantize
  end

  def table_name
    model_class.table_name #the table_name # is goin_2_get_pulled from SQLObject...
  end
end

class BelongsToOptions < AssocOptions

  def initialize(name, options = {})
    defaults = {
      primary_key: :id,
      foreign_key: "#{name}_id",
      class_name: name.to_s.camelcase
    }

    defaults.keys.each { |k| self.send("#{k}=", options[k] || defaults[k]) } 
  end
end

class HasManyOptions < AssocOptions

  def initialize(name, self_class_name, options = {})
    defaults = {        
      primary_key: :id,
      foreign_key: "#{self_class_name.underscore}_id".to_sym, 
      class_name: name.to_s.singularize.camelcase
    }

    defaults.keys.each { |k| self.send("#{k}=", options[k] || defaults[k]) }
  end
end

module Associatable

  def belongs_to(name, options = {})
    self.assoc_options[name] = BelongsToOptions.new(name, options)

    define_method(name) do
      options = self.assoc_options[name]
      options.model_class.where(id: => options[:foreign_key])
    end
  end
  
  def has_many(name, options = {})
    self.assoc_options[name] = HasManyOptions.new(name, options)

    define_method(name) do
      options = self.assoc_options[name]
      options.model_class.where(options[:foreign_key] => options[:primary_key])
    end
  end

  def assoc_options
    @assoc_options ||= {}
    @assoc_options          #this is a module @varible being declared that is individual btw MODELS due to 1@ !2
  end                       #These are class lvl despite the lack of sel.assoc_opt due 2 extend's effect....
end

class SQLObject
  extend Associatable
end
