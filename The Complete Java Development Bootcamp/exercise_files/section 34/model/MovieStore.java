package model;

import java.util.ArrayList;
import java.util.List;

public class MovieStore {
  private List<Movie> movies;

  public MovieStore() {
    this.movies = new ArrayList<>();
  }

  public void addMovie(Movie movie) {
    this.movies.add(movie);
  }

  public List<Movie> filterByGenre(String genre) {
    return movies.stream().filter(movie -> movie.getGenre().equalsIgnoreCase(genre)).toList();
  }

  public List<Movie> sortByReleaseYear() {
    return movies.stream().sorted((a, b) -> Integer.compare(a.getReleaseDate(), b.getReleaseDate())).toList();
  }

  public List<Movie> getTopRatedMovies(int n) {
    return movies.stream().sorted((a, b) -> Double.compare(b.getImdbRating(), a.getImdbRating())).limit(n).toList();
  }

}
