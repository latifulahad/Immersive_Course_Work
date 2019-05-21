class ShortenedUrl < ActiveRecord::Base
  validates :long_url, :submitter_id, presence: true
  validates :short_url, uniqueness: true
  validate :no_spamming, :non_premium_max

  def self.create_for_user_and_long_url!(user, long_url)
    ShortenedUrl.create!(
      submitter_id: user.id,
      long_url: long_url,
      short_url: ShortenedUrl.random_code
    )
  end

  def self.random_code
    loop do
      random_code = SecureRandom.urlsafe_base64(16)
      return random_code unless ShortenedUrl.exists?(short_url: random_code)
    end
  end

  def self.prune(min) #WORKS PERFECT...NEED TO WRITE LOGIC FOR ASSOCIATED OBJS WITHIN OTHER_TABLES
    visits = Visit.all
    old_visits = visits.where('created_at <= ?', min.minutes.ago) #logic to filter new_from_old
    old_visits.each do |vst|
      s_url_obj = ShortenedUrl.find(vst.short_url_id)
      s_url_obj.help_prune(vst.short_url_id) 
    end 
  end

  def help_prune(s_url_id)  #helper_method checks for User.premium b4 removing from DB
    current_url = ShortenedUrl.find(s_url_id)
    assist_prune(current_url) if current_url.submitter.premium == false
  end

  def assist_prune(s_url) #performs actual removal of ShortenedUrl obj && it's associations!!!
    obsolete_visits = s_url.visitors
    obsolete_visits.each { |vst| vst.destroy }
    s_url.destroy
  end

  belongs_to :submitter,
  primary_key: :id,
  foreign_key: :submitter_id,
  class_name: 'User'

  has_many :visitors,
  primary_key: :id,
  foreign_key: :short_url_id,
  class_name: 'Visit'

  def num_clicks
    visitors.count
  end

  def num_uniques
    a = visitors
    b = a.select('user_id').distinct
    b.count
  end

  def num_recent_uniques
    a = visitors
    b = a.select('user_id').where('created_at > ?', 10.minutes.ago)
    b.distinct
  end

  private

  def no_spamming
    list = ShortenedUrl.where('created_at >= ?', 1.minute.ago).where(submitter_id: self.submitter_id).length
    self.errors[:maximum] << 'limit met for the given minute...cannot accept!' if list >= 5
  end

  def non_premium_max
    return if User.find(self.submitter_id).premium == true
    posts = ShortenedUrl.where(submitter_id: self.submitter_id)
    self.errors[:maximum] << 'limit reached for a non-member :( .' if posts.length >= 5
  end

end