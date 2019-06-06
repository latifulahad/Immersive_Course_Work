class AttrAccessorObject

  def self.my_attr_accessor(*names)

    names.each do |attr_nm|
      define_method(attr_nm) do
        instance_variable_get("@#{attr_nm}")
      end

      define_method("#{attr_nm}=") do |value|
        instance_variable_set("@#{attr_nm}", value)
      end
    end

  end

end
