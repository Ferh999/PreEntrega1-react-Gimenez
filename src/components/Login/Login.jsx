import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, {useState} from 'react'
import "./Login.css"
import * as Yup from "yup"

const Login = () => {

    const {handleSubmit, values, handleChange, errors} = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        onSubmit:(data)=>{
            console.log(data)
        },
        validationSchema: Yup.object().shape({
            email:Yup.string().email("Ingrese un Email válido").required("Complete este Campo").min(6).max(25),
            password:Yup.string().required("Complete este Campo").min(8).max(25)
        }),
        validateOnChange: false,
    });


    return (
    <div style={{margin:"50px"}}>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" 
        label="email" 
        variant="outlined" 
        values={values.email} 
        name="email" 
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
        />
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        values={values.password}
        name="password"
        onChange={handleChange}
        error={errors.password ? true : false}
        helperText={errors.password}
        />
        <Button variant="contained" className='btn-login' type='submit'>Login</Button>
        </form>
    
    </div>
    )
}

export default Login