import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './LoginForm';
import { login, reset } from '../../actions/user/login';

class Login extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    registered: PropTypes.object,
    register: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    if (this.props.loggedin)
      return (
        <Redirect
          to={`/`}
        />
      );
    return (
      <div>
        <h1>Login</h1>

        {this.props.loading && (
          <div className="alert alert-info" role="status">
            Loading...
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{' '}
            {this.props.error}
          </div>
        )}


        <Form onSubmit={this.props.login} values={this.props.item} />
        <Link to="." className="btn btn-primary">
          Back to list
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggedin, error, loading } = state.user.login;
  return { loggedin, error, loading };
};

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
