import React, { Component } from 'react'
import MovieCard from './components/movie'

class App extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=13e89c24f158a60825dc2457a598fc80'
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        })
      })
  }
  generateMoviePath(path) {
    return 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + path
  }

  render() {
    return (
      <>
        <h1>Salacia's Hit List</h1>
        <ul>
          {this.state.movies.map((movie) => {
            return (
              <MovieCard
                title={movie.title}
                plot={movie.overview}
                posterImage={this.generateMoviePath(movie.poster_path)}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
