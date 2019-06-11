require_relative '03_associatable'

# Phase IV
module Associatable
  
  def has_one_through(name, through_name, source_name)
    define_method(name) do
      thru_obj = self.assoc_options[through_name]
      sc_nm_obj = thru.model_class.assoc_options[source_name]

      tru_table_nm = thru_obj.table_name #this wrks due to opt_class < AssocO which hold this #
      tru_pk = thru_obj.primary_key
      tru_fk = thru_obj.foreign_key

      sc_table_nm = sc_nm_obj.table_name
      sc_pk = sc_nm_obj.primary_key
      sc_fk = sc_nm_obj.foreign_key

      ans = DBConnection.execute(<<-SQL, tru_fk)
      SELECT 
        #{sc_table_nm}.*
      FROM
        #{tru_table_name} --b table
      JOIN
        #{sc_table_nm} --c table
      ON 
        #{tru_table_nm}.#{sc_fk} = #{sc_table_nm}.#{sc_pk}
      WHERE
        #{tru_table_nm}.#{tru_pk} = ? --a table linked via b's f_key
      SQL

      self.parse_all(ans)
    end
  end

end
