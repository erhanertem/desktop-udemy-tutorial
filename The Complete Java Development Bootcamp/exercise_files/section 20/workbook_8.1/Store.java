import java.util.ArrayList;
import java.util.List;

public class Store {

    private List<Movie> movies;

    public Store() {
        this.movies = new ArrayList<>();
    }

    public Movie getMovie(int index) {
        Movie movie = movies.get(index);
        return new Movie(movie); // get a brand new copy of the existing object
    }

    public void setMovie(int index, Movie movie) {
        this.movies.set(index, new Movie(movie)); // set with a brand new copy of the provided object
    }

    public void addMovie(Movie movie) {
        this.movies.add(new Movie(movie)); // add a brand new copy of the provided movie object
    }

    public String toString() {
        String temp = "";
        for (Movie movie : movies) {
            temp += movie.toString() + "\n";
        }
        return temp;
    }

}