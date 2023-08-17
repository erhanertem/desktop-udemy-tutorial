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

  public String getName() {
    return this.name;
  }

  public String getActor() {
    return this.actor;
  }

  public String getGenre() {
    return this.genre;
  }

  public int getReleaseDate() {
    return this.releaseDate;
  }

  public double getImdbRating() {
    return this.imdbRating;
  }

  @Override
  public String toString() {
    return name + " (" + releaseDate + ") - Directed by " + actor + ", Genre: " + genre + ", Rating: " + imdbRating;
  }
}
