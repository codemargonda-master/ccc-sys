import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Control, Errors, Form, combineForms, actions} from 'react-redux-form';
const thunk = ReduxThunk.default;

const initialUserState = {
  username: 'alfonkris@gmail.com',
  password: '',
  passwordConfirm: ''
};

const store = createStore(combineForms({user: initialUserState}), applyMiddleware(thunk, reduxLogger()));

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {dispatch} = store;
    const user = store.getState().user;

    console.log(user);
  }

  render() {
    const getUserClassName = field => {
      const userForm = store.getState().forms.user;
      const isTouched = userForm[field].touched;
      const isValid = userForm[field].valid;

      return `form-control${isTouched || this.props.submitFailed
        ? ' active'
        : ''}${ !isValid
          ? ' invalid'
          : ''}`;
    };

    const MyTextInput = props => {
      const [,
        name] = props.name.split('.');
      const className = getUserClassName(name);

      return <input className={className} autoComplete="off" {...props}/>;
    };

    const showErrors = field => {
      const form = store.getState().forms.user.$form;

      return !field.pristine || form.submitFailed;
    };

    return (
      <Form model="user">
        <div className="form-group">
          <label>Username</label>
          <Control.text model=".username" component={MyTextInput} validators={{
            required: val => val && val.length,
            validEmail: validator.isEmail
          }}/>
          <Errors className="errors" model="user.username" show={showErrors} messages={{
            required: 'Username is required',
            validEmail: 'Username should be a valid email address'
          }}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <Control.text model=".password" component={MyTextInput} validators={{
            required: val => val && val.length,
            length: val => val.length == 0 || val.length > 4
          }}/>
          <Errors className="errors" model="user.password" show={showErrors} messages={{
            required: 'Password is required',
            length: 'Password should be longer than 4 chars'
          }}/>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <Control.text model=".passwordConfirm" component={MyTextInput} validators={{
            required: val => val && val.length,
            matches: val => val === store.getState().user.password
          }}/>
          <Errors className="errors" model="user.passwordConfirm" show={showErrors} messages={{
            required: 'Confirm Password is required',
            matches: 'Passwords do not match'
          }}/>
        </div>
        <button onClick={this.handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </Form>
    );
  }
}

const BasicForm = connect(state => {
  const {submitFailed} = state.forms.user.$form;

  return {submitFailed};
})(UserForm);

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <BasicForm/>
        </Provider>
        <p className="note">Note: see browser console for redux logging</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app'));
