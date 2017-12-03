import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFoundPage from '../NotFoundPage';
import Button from '../../components/Button';

import { increase } from './actions';

class App extends React.Component {
    
    state = {
        text: '',
    }

    change = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <Button
                    label='Hello World'
                    color='#f00'
                    fontSize={13}
                    onClick={() => alert('a')}
                />
                <input
                    type='text'
                    value={this.state.text}
                    name='text'
                    onChange={this.change}
                />
                <button
                    onClick={() => alert(`Your text: ${this.state.text}`)}
                >Alert</button><br/><br/>
                Count: {this.props.count}
                <button
                    onClick={this.props.increase}
                >Increase</button>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/user/:user" component={User} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

const HomePage = () => <h2>Home Page!</h2>;

const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
);

const mapStateToProps = (state) => ({
    count: state.appReducer.count,
});

const mapDispatchToProps = ({
    increase,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
