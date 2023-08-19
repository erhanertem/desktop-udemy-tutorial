package model;

public class Movie {
  private String name;
  private String actor;
  private String genre;
  private int releaseDate;
  private double imdbRating;

  public Movie(String name, String actor, String genre, int releaseDate, double imdbRating) {
    this.name = name;
    this.actor = actor;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.imdbRating = imdbRating;
  }

  public Movie(Movie source) {
    this.name = source.name;
    this.actor = source.actor;
    this.genre = source.genre;
    this.releaseDate = source.releaseDate;
    this.imdbRating = source.imdbRating;
  }


  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getActor() {
    return this.actor;
  }

  public void setActor(String actor) {
    this.actor = actor;
  }

  public String getGenre() {
    return this.genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public int getReleaseDate() {
    return this.releaseDate;
  }

  public void setReleaseDate(int releaseDate) {
    this.releaseDate = releaseDate;
  }

  public double getImdbRating() {
    return this.imdbRating;
  }

  public void setImdbRating(double imdbRating) {
    this.imdbRating = imdbRating;
  }


  @Override
  public String toString() {
    return name + " (" + releaseDate + ") - Directed by " + actor + ", Genre: " + genre
        + ", Rating: " + imdbRating;
  }
}
