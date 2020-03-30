import React, { Component } from 'react'

class LikedBy extends Component {
	render() {
      	let likedByUsers = []
        const movie = this.props.movie
        const users = this.props.users
        const profiles = Object.values(this.props.profiles)
        profiles.forEach((profile) => {
        	if ( Number(profile.favoriteMovieID) === movie.id ) { likedByUsers.push(users[Number(profile.userID)].name) }
        })
    	return (
        	<div>
          		{ !likedByUsers.length ? 
                 	<p>None of the current users liked this movie</p> :
          			<div>
                 		<p>Liked by</p>
                 		<ul>
                 			{ likedByUsers.map((user) => <li key={user}>{user}</li> )}
          				</ul>
          			</div>
				}
          	</div>
        )
    }
}

export default LikedBy