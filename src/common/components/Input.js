import React from 'react';

export function Input(props) {
	const { handleChange, handleBlur, value, touched, errors, className, name, placeHolder, required = false } = props;

	return (
		<div className={`${className} mt-4`}>
			<div className='col-md-3 my-auto'>
				<span className='font-size-1 my-auto'>{placeHolder}</span>
				{required && <span className='my-auto text-danger'>{" *"}</span>}
			</div>
			<div className='col-md-9 '>
				<input
					type="text"
					onChange={handleChange}
					onBlur={handleBlur}
					value={value}
					className={errors && touched ? 'errorShadow' : 'form__field'}
					placeholder={placeHolder}
					name={name}
				/>
			</div>
			<div className={` mt-2 mx-auto`}>
				{errors && touched && <div id="feedback" className='text-danger pt-1 text-center m-auto'>{errors}</div>}
			</div>
		</div>
	)
}
