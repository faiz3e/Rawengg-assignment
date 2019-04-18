import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';
import { doLogin, rehydrateReducer } from './ActionCreators';
import { selectLoginState, selectErrorMessage } from './selector';
import { StatusMessage } from '../../../common/components/statusMessage/StatusMessage';
import Log from '../../../common/helpers/logger';

const Login = (props) => {

  const [users, setUser] = useState([]); //?  state data here  

  useEffect(() => {   //? new life cycle hook here 
    console.log(">>>");
    
    Log.trace('Login Component!', 'Mounting');
    const localData = localStorage.getItem('userData');
    if (localData && localData.length > 0) {
      let localDataCopy = JSON.parse(localData)
      props.rehydrateReducer(localDataCopy)
      Log.info('Login Component!', 'rehydrating Reducer');
    }
  }, []); //?   we add dependency here 

  useEffect(() => {
    // Log.trace('Login componentDidUpdate!', this.props);
    // this.props.isLoggedIn &&
    //   this.props.history.replace('/dashboard')
  }, []); //?   we add dependency here
  return (
    <div >
      <Formik initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          props.login(values)
        }}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
            <Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} /><br />
            <Button title='LOG IN' type="submit" onClicked={() => { }} /><br />
            <Button title='SIGN UP' type='button' onClicked={() => { }} navigateTo={'/signup'} />
            <br />
            <StatusMessage message={props.feedBackMessage} />
          </form>
        )}
      </Formik>
    </div>
  )
}
export default Login 
// class Login extends Component {

//   componentDidMount() {
//     Log.trace('Login Component!', 'Mounting');
//     const localData = localStorage.getItem('userData');
//     if (localData && localData.length > 0) {
//       let localDataCopy = JSON.parse(localData)
//       this.props.rehydrateReducer(localDataCopy)
//       Log.info('Login Component!', 'rehydrating Reducer');
//     }
//   }

//   componentDidUpdate() {
//     Log.trace('Login componentDidUpdate!', this.props);
//     this.props.isLoggedIn &&
//       this.props.history.replace('/dashboard')
//   }

//   render() {
//     return (
//       <div >
//         <Formik initialValues={{ email: '', password: '' }}
//           onSubmit={(values) => {
//             this.props.login(values)
//           }}>
//           {({ handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//               <h2>Login</h2>
//               <Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
//               <Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} /><br />
//               <Button title='LOG IN' type="submit" onClicked={() => { }} /><br />
//               <Button title='SIGN UP' type='button' onClicked={() => { }} navigateTo={'/signup'} />
//               <br />
//               <StatusMessage message={this.props.feedBackMessage} />
//             </form>
//           )}
//         </Formik>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: selectLoginState(state),
//     feedBackMessage: selectErrorMessage(state)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (values) => dispatch(doLogin(values)),
//     rehydrateReducer: (values) => dispatch(rehydrateReducer(values))
//   }
// }

// export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)

