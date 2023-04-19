import React from 'react';
import PropTypes from 'prop-types'

export class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "Changed Link"
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000)
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    })
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }


  render() {
    // let user = this.props.user;
    let name = this.props.name;
    // let age = this.props.age;
    return (
      <div>
        <p>Name { name }</p>
        <p>Age { this.state.age }</p>
        <p>Status: {this.state.status}</p>
        {/* <div>
          <h4>Hobbies</h4>
          <ul>
            {user.hobbies.map((h,i) => <li key={i}>{h}</li>)}
          </ul>
        </div> */}
        <hr/>
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number
  // user: PropTypes.object,
  // children: PropTypes.element.isRequired
}