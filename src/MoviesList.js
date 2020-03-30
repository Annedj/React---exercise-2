import React, { Component } from 'react'
import LikedBy from './LikedBy'

class MoviesList extends Component {
	render() {
      	console.log('Props', this.props)
    	return (
          	<ol>
        	{Object.values(this.props.movies).map((movie) => (
          		<div key={movie.id}>
                  <h2>{movie.name}</h2>
                  <LikedBy movie={movie} users={this.props.users} profiles={this.props.profiles} />
				</div>
        	))}
        </ol>
		)
    }
}

export default MoviesList