def it_was_ok
  # Find the id, title, and score of all movies with scores between 2 and 3
  Movie.select('id, title, score').where(score: 2..3)
end

def harrison_ford
  # Find the id and title of all movies in which Harrison Ford
  # appeared but not as a lead actor
  Movie.select('id, title').joins(:actors).where(actors: { name: 'Harrison Ford' }).where.not(castings: { ord: 1} )
end

def biggest_cast
  # Find the id and title of the 3 movies with the
  # largest casts (i.e most actors)
  Movie.select('id, title').joins(:actors).group('movies.id').order('COUNT(actors.id) DESC').limit(3)
end

def directed_by_one_of(them)
  # Movie.where('yr IN (?)', years)
  # ActiveRecord gives us an even better way to write this:
  # Movie.where(yr: years)
  # Find the id and title of all the movies directed by one of 'them'.
  Movie.select(:id, :title).joins(:director).where(actors: { name: them } )
end

def movie_names_before_1940
  # Use pluck to find the title of all movies made before 1940.
  Movie.where('yr < 1940').pluck(:title) 
end
