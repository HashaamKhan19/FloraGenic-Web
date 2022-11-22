import React, { useState } from 'react'
import sideImage from '../../public/images/SignIn-removebg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const SignUpCard = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [user, setUser] = useState()
  const [visible, setVisible] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [validemail, setValidEmail] = useState(true)
  const [validpassword, setValidPassword] = useState(true)
  const [validConfirmPassword, setValidConfirmPassword] = useState(true)

  const regEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const onSubmit = (event) => {
    event.preventDefault()

    regEmail.test(email) ? setValidEmail(true) : setValidEmail(false)
    password.length > 5 ? setValidPassword(true) : setValidPassword(false)

    if (regEmail.test(email) && password.length > 5) {
      console.log('Ready to Login')
    } else {
      console.log('Invalid Data')
    }
  }

  return (
    <div className="flex flex-row">
      {/* Image Container */}
      <div className="w-1/2">
        <Image className="h-screen lg:block xs:hidden" src={sideImage} />
      </div>

      {/* Form Container */}
      <div className="w-1/2 px-24 py-[60px]">
        <form
          className="bg-emerald-50 px-6 py-8 flex flex-col rounded-lg"
          onSubmit={onSubmit}
        >
          {/* Select Component */}
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            {/* User Selection */}
            <FormControl sx={{ minWidth: 140 }} size="small">
              <InputLabel id="demo-select-small">User</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={user}
                label="Age"
                onChange={(e) => setUser(e.target.value)}
              >
                <MenuItem value={10}>Customer</MenuItem>
                <MenuItem value={20}>Gardener</MenuItem>
                <MenuItem value={30}>Nursery Owner</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Inputs */}
          <TextField
            margin="small"
            label="Email Address"
            autoComplete="email"
            variant="outlined"
            fullWidth
            size="medium"
            error={!validemail}
            helperText={!validemail && 'Please Enter a Valid Email Address'}
            onChange={(e) => {
              setEmail(e.target.value), setValidEmail(true)
            }}
            sx={{ marginTop: 3 }}
          />
          <TextField
            margin="small"
            label="Password"
            type={visible ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ marginTop: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={(e) => {
                      setVisible(!visible)
                    }}
                  >
                    {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!validpassword}
            helperText={
              !validpassword && "Password can't be less than 5 characters"
            }
            onChange={(e) => {
              setPassword(e.target.value)
              setValidPassword(true)
            }}
          />

          <TextField
            margin="small"
            label="Confirm Password"
            type={confirmVisible ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ marginTop: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={(e) => {
                      setConfirmVisible(!confirmVisible)
                    }}
                  >
                    {confirmVisible ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!validpassword && validpassword != validConfirmPassword}
            helperText={
              !validpassword && "Password can't be less than 5 characters"
            }
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              setValidConfirmPassword(true)
            }}
          />

          {/* Buttons */}
          <div className="mt-3">
            <a className="text-sm font-semibold text-emerald-600 hover:cursor-pointer hover:text-emerald-700 transition-all ease-in">
              Forgot Password?
            </a>
          </div>

          <div className="mt-4">
            <button
              className="bg-emerald-600 hover:bg-emerald-700 transition-all ease-in w-full py-2 rounded-lg text-white"
              onClick={(e) => console.log(e)}
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign in options */}

        <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p class="text-center font-semibold mx-4 mb-0">Or Continue With</p>
        </div>

        <div className="flex flex-row w-full justify-center mt-2">
          <a className="w-20 h-10 bg-slate-100 rounded-full hover:bg-slate-200 hover:cursor-pointer">
            <BsFacebook
              className="flex w-8 h-8 ml-6 mt-1 p-1"
              style={{ color: 'blue' }}
            />
          </a>
          <a className="w-20 h-10 bg-slate-100 ml-10 rounded-full hover:bg-slate-200 hover:cursor-pointer">
            <FcGoogle className="w-8 h-8 ml-6 mt-1 p-1" />
          </a>
        </div>
        <p className="text-center text-black font-poppins text-sm mt-6">
          Already have an account?{' '}
          <Link
            className="text-emerald-600 font-poppins font-bold hover:cursor-pointer hover:text-emerald-700"
            href="/signIn"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpCard
