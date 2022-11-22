import React from "react";
import TextField from '@mui/material/TextField';
import { Button, FormControlLabel } from "@mui/material";
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import './login.scss'
import Checkbox from '@mui/material/Checkbox';
import { LoginAcc } from "../../redux/auth-slice";
import { RootState, useAppDispatch } from "../../redux/redux-store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface IFormInput {
  email: string
  password: string
  rememberMe: boolean
}

const Login = () => {

  const dispatch = useAppDispatch()
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (data) {
      dispatch(LoginAcc(data));
    }
  }
  if (isAuth) return <Navigate to={'/profile'} />

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField
          {...field}
          id="filled-basic"
          label="E-Mail"
          type='email'
          variant="filled" />} />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField
          {...field}
          id="filled-basic"
          label="Password"
          type='password'
          variant="filled" />} />

      <Controller
        name="rememberMe"
        control={control}
        defaultValue={true}
        rules={{ required: false }}
        render={({ field }) => {
          return <FormControlLabel
            control={<Checkbox {...field} defaultChecked />}
            label="Remember Me"
          />
        }}
      />
      <Button color="inherit" type="submit">Submit</Button>
    </form>
  )
}
export default Login;