import React, { useState } from 'react';
import { enhancer } from './enhancer'
import { Input } from '../../../common/components/Input';

function Dashboard(props) {
  const { hoverOption, setHoverOption, currentFormStep, handleSubmit, handleChange, values, errors, handleBlur, touched, userEmail,redId } = props;
  return (
    <div className='pb-5'>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">NRC</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" >Contact us<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >About NRC</a>
      </li>
      <li className="nav-item">
        <a className="nav-link pointer" onClick={()=>props.logout()}>Logout -></a>
      </li>
    
    </ul>
  </div>
</nav>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12  align-center justify-content-center d-flex'>
          <div className='h1 pt-3'>{"NRC document"}</div>
        </div>
      </div>
      {/* <button onClick={postApiCall}>postApiCall</button> */}
      <form onSubmit={handleSubmit}>
        <div className={'row mt-5 mb-3'}>

      <div className='col-md-3 my-auto'>
				<span className='font-size-1 my-auto'>{'Age Group'}</span>
		 <span className='my-auto text-danger'>{" *"}</span>
			</div>
			<div className='col-md-9 '>
      <select
        name="ageBlock"
        value={values.ageBlock}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}
        >
        <option value="1" label="Prior 26 Jan 1950" />
        <option value="2" label="26 Jan 1950 to 01 July 1987" />
        <option value="3" label="01 July 1987 to 31 Dec 2003" />
        <option value="4" label="01 Jan 2004 to Till Date" />
      </select>
      </div>
      {errors.ageBlock &&
        touched.ageBlock &&
        <div className="input-feedback">
          {errors.ageBlock}
        </div>}
        </div>


        <Input
          touched={touched.email}
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.email}
          name={"email"}
          className={'row d-flex'}
          placeHolder={"Email"}
          required={true}
        />

        <Input
          touched={touched.name}
          value={values.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.name}
          name={"name"}
          className={'row d-flex'}
          placeHolder={"Name"}
          required={true}
        />

        <Input
          name={"middleName"}
          touched={touched.middleName}
          value={values.middleName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.middleName}
          className={'row d-flex'}
          placeHolder={"Middle Name"} />

        <Input
          name={"surname"}
          touched={touched.surname}
          value={values.surname}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.surname}
          className={'row d-flex'}
          placeHolder={"Surname"}
          required={true}
        />

        <Input
          name={"phoneNumber"}
          touched={touched.phoneNumber}
          value={values.phoneNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.phoneNumber}
          className={'row d-flex'}
          placeHolder={"Phone Number"}
          required={true}
        />
        <Input
          name={"date"}
          touched={touched.date}
          value={values.date}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.date}
          className={'row d-flex'}
          placeHolder={"DD"}
          required={true}
        />

        <Input
          name={"month"}
          touched={touched.month}
          value={values.month}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.month}
          className={'row d-flex'}
          placeHolder={"MM"}
          required={true}
        />
        <Input
          name={"year"}
          touched={touched.year}
          value={values.year}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.year}
          className={'row d-flex'}
          placeHolder={"YY"}
          required={true}
        />
        <Input
          name={"documentName"}
          touched={touched.documentName}
          value={values.documentName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.documentName}
          className={'row d-flex'}
          placeHolder={"Document Name"}
          required={true}
        />
        <Input
          name={"documentNumber"}
          touched={touched.documentNumber}
          value={values.documentNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.documentNumber}
          className={'row d-flex'}
          placeHolder={"Document Number"}
          required={true}
        />

        <Input
          name={"familyNumber"}
          touched={touched.familyNumber}
          value={values.familyNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.familyNumber}
          className={'row d-flex'}
          placeHolder={"Reference family number"}
        />
        {redId&&<div className={'pb-5 pt-5'}>
          <div className='h1  '>Your Family Reference id is :- {redId}</div>
          <p>please copy the reference id for you family and submit when filling next family member data</p>
          </div>}
        <div className='row'>
          <div className='mx-auto text-center col-md-12'>
            <button className='btn btn-primary' type="submit" >Submit</button>
          </div>
        </div>
      </form>
      
    </div>
    </div>
  );
}

export default enhancer(Dashboard);
