def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.
  Movie.select(:id, :title)
  .joins(:actors)
  .where(actors: { name: those_actors })
  .group(:id)
  .having('COUNT(actors.id) >= ?', those_actors.count)  
end

def golden_age
  # Find the decade with the highest average movie score.
  Movie.select('AVG(score) AS scores,(yr / 10) * 10 AS decade')
  .group('decade')
  .order('scores DESC')
  .first
end

def costars(name)
  needed_films = Movie.select(:id).joins(:actors).where(actors: { name: name })

  Movie
    .joins(:actors)
    .where.not(actors: { name: name })   #becuz we alrdy have the films_with_guy_of_interest
    .where(movies: { id: needed_films }) #matching films titles of other_actors
    .distinct                            #removing_dups
    .pluck(:name)                    
end

def actor_out_of_work
  Actor
  .select(:name)
  .joins('LEFT OUTER JOIN castings on castings.actor_id = actors.id')
  .where(castings: { movie_id: nil })
  .count
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.
  wntd_lttrs = "%#{whazzername.split(//).join('%')}%"
  Movie
  .select(:title)
  .joins(:actors)
  .where("UPPER(actors.name) LIKE UPPER(?)", wntd_lttrs)
end

def longest_career
  Actor.select(:id, :name, 'MAX(movies.yr) - MIN(movies.yr) AS cr_dura')
  .joins(:movies)
  .group(:id)
  .order(cr_dura DESC)
  .limit(3)
end
