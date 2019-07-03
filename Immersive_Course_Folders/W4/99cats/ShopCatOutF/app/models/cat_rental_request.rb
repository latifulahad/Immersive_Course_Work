class CatRentalRequest < ApplicationRecord
  STATUS = ["PENDING", "APPROVED", "DENIED"]

  validates :status, inclusion: STATUS
  validates :cat_id, :start_date, :end_date, presence: true
  validate :donnot_overlep_aprvd_req

  belongs_to :cat,
  primary_key: :id,
  foreign_key: :cat_id,
  class_name: 'Cat'

  def overlapping_req
    ans = CatRentalRequest
    .where(cat_id: cat_id)
    .where.not(id: id)
    .where("start_date >= ? OR end_date >= ? ", start_date, start_date)
  end

  def overlapping_approved_req
    self.overlapping_req.where("status = ? ","APPROVED")
  end

  def donnot_overlep_aprvd_req 
    if self.status == "APPROVED"
      self.errors[:aprvd] << "req already exists for these dates" unless self.overlapping_approved_req.empty?
    end
  end

  def approve!
    raise "Request not pending" unless self.status == "PENDING" || self.status == "DENIED"
    transaction do
      self.status = "APPROVED"
      self.save!

      self.overlapping_req.each { |req| req.update!(status: "DENIED") }
    end
  end

  def deny!
    self.update!(status: "DENIED") unless self.status == "DENIED"
  end

end