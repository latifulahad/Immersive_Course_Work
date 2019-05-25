class Artist < ApplicationRecord
  has_many :albums,
    class_name: 'Album',
    foreign_key: :artist_id,
    primary_key: :id

  def n_plus_one_tracks
    albums = self.albums
    tracks_count = {}
    albums.each do |album|
      tracks_count[album.title] = album.tracks.length
    end

    tracks_count
  end

  def better_tracks_query
    objs_in_need = self.albums.select('albums.*, COUNT(*) AS track_count').joins(:tracks).group('albums.id')
    ans = {}
    objs_in_need.each { |al| ans[al.title] = al.track_count }
    ans
  end
end
