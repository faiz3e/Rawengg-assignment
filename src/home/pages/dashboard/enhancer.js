import React, { useState, useEffect } from 'react';
import { withFormik } from 'formik';
import { compose } from 'redux'
import { validateEmail } from '../../../common/helpers/validators';
import { connect } from 'react-redux'
import { selectUserInfo } from '../login/selector';
import { doLogout } from '../login/ActionCreators';

const callApi = async (userEmail, setValues) => {
  let emailWithNoDots = userEmail.replace(/[.]/g, '')

  const response = await fetch(`https://rawengg-92652.firebaseio.com/${emailWithNoDots}.json`);
  const resp = await response.json();
  if (resp)
    if (resp[Object.keys(resp)[0]] && resp[Object.keys(resp)[0]].values) {
      setValues(resp[Object.keys(resp).sort().reverse()[0]].values)
    }
}

const postApiCall = async (values, userEmail, setredId) => {
  const authData = {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify({
      values: values
    })
  }
  let emailWithNoDots = userEmail.replace(/[.]/g, '')
  const response = await fetch(`https://rawengg-92652.firebaseio.com/${emailWithNoDots}.json`, authData);
  const resp = await response.json();
  console.log("resp", resp);
  setredId(resp.name.replace(/-/g, ''))
}

// let firebaseref = firebase.database().ref('nrc')
const formikForm = withFormik({
  mapPropsToValues: () => ({
    email: '', name: '', middleName: '',
    surname: '', phoneNumber: '',
    year: '', month: '', date: '', familyNumber: '',documentName:'',documentNumber:'',ageBlock:''
  }),

  validate: values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (validateEmail(values.email)) {
      errors.email = 'email not valid'
    }
    if ((values.phoneNumber).length !== 10) {
      errors.phoneNumber = 'phone not valid'
    }
    if (!values.surname) {
      errors.surname = 'Required';
    }
    if (!values.date) {
      errors.date = 'Required';
    }
    if (values.date>31) {
      errors.date = 'Not valid';
    }
    if (!values.month) {
      errors.month = 'Required';
    }
    if (values.month>12) {
      errors.month = 'Not valid';
    }
    if (!values.year) {
      errors.year = 'Required';
    }
    if ((values.year<1850)|| (values.year>=2020)) {
      errors.year = 'Not valid';
    }
    if (!values.documentName) {
      errors.documentName = 'Need a Document Name';
    }
    if (!values.documentNumber) {
      errors.documentNumber = 'Need a Document Name';
    }
    return errors;
  },


  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      console.log("props", values);
      postApiCall(values, props.userEmail, props.setredId);
      // console.log("pp", props.history.push('/form2'));
    }, 0);
  },
  displayName: 'BasicForm',
})
const mapStateToProps = (state) => {
  return {
    userEmail: selectUserInfo(state),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(doLogout()),
  }
}
const userRef = Comp => (props) => {
  const [redId, setredId] = useState()
  console.log("pp????", props);
  return <Comp {...{ setredId, redId, ...props }} />
}

export const enhancer = compose(connect(mapStateToProps, mapDispatchToProps), userRef, formikForm, Component => (props) => {
  const [hoverOption, setHoverOption] = useState(0)
  const [currentFormStep, setCurrentFormStep] = useState(1)

  useEffect(() => {
    // Update the document title using the browser API
    callApi(props.userEmail, props.setValues);
  }, []);


  return <Component  {...{
    hoverOption,
    setHoverOption,
    currentFormStep,
    setCurrentFormStep,
    ...props,
  }} />
})


