import React, { Component } from 'react'

class MovieCard extends Component {
  render() {
    const { title, plot, posterImage } = this.props

    return (
      <div className="movie-card">
        <img className="movie-poster" src={posterImage} />
        <h2 className="movie-title">{title}</h2>
        <p className="movie-plot">{plot}</p>
      </div>
    )
  }
}
export default MovieCard
