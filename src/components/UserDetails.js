import React, { Component } from 'react'
import Loading from './Loading'

class UserDetails extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
  render() {

    if (this.props.loading) {
        return <Loading />
     } 
    else{
        return (
            <div>
                {this.props.user.name}
            </div>
        )
     }
  }
}

export default UserDetails