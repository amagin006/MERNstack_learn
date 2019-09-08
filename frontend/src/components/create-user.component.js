import React from 'react';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      username: "",
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault()

    const username = {
      username: this.state.username,
    }

    console.log(username)
    this.setState({
      username: "",
    })
  }



  render() {
    return (
      <>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>UserName: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              /> 
          </div>
              
          <div className="form-group">
            <input type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
              />
          </div>
        </form>
      </>
    )
  }
}

export default CreateUser;