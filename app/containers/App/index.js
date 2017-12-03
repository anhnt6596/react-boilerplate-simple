import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFoundPage from '../NotFoundPage';

class App extends React.Component {
    
    state = {
        value: '',
    }

    change = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.value} onChange={this.change} />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/company" component={Company} />
                    <Route path="/:user" component={User} />
                </Switch>
            </div>
        );
    }
}

const About = () => <h2>About!</h2>
const Company = () => <h2>Company!</h2>
const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
)

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
