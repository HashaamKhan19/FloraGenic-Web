import { AlternateEmail, Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, InputLabel, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useRouter } from 'next/router'
import React from 'react'

import ControlledDropzone from '../Generic/ControlledComponents/ControlledDropzone'
import ControlledSelect from '../Generic/ControlledComponents/ControlledSelect'
import ControlledTelInput from '../Generic/ControlledComponents/ControlledTelInput'
import ControlledTextInput from '../Generic/ControlledComponents/ControlledTextInput'

const AddCustomer = ({ control, getValues, setValue, errors }) => {
  const [action, setAction] = React.useState('Enter')

  const router = useRouter()

  React.useEffect(() => {
    const parts = router.pathname.split('/')
    parts[parts.length - 1] == 'addUser' ? action : setAction('Edit')
  }, [router, action])

  const passwordDisplay = () => {
    {
      showPassword == 'text'
        ? setShowPassword('password')
        : setShowPassword('text')
    }
  }

  const confirmPasswordDisplay = () => {
    {
      showConfirmPassword == 'text'
        ? setShowConfirmPassword('password')
        : setShowConfirmPassword('text')
    }
  }

  const [showPassword, setShowPassword] = React.useState('password')
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(
    'password',
  )

  return (
    <>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="firstName"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          {action} First Name
        </InputLabel>
        <ControlledTextInput
          control={control}
          required
          id="firstName"
          name="firstName"
          placeholder="Jane"
          fullWidth
          autoComplete="family-name"
          error={errors.firstName ? true : false}
          helperText={errors.firstName && 'First name is required'}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="lastName"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          {action} Last Name
        </InputLabel>
        <ControlledTextInput
          control={control}
          required
          name="lastName"
          id="lastName"
          placeholder="Doe"
          fullWidth
          autoComplete="family-name"
          error={errors.lastName ? true : false}
          helperText={errors.lastName && 'Last name is required'}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          required={action == 'Enter' ? true : false}
          disabled={action == 'Enter' ? false : true}
          htmlFor="email"
          variant="standard"
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          {action} Email
        </InputLabel>
        <ControlledTextInput
          control={control}
          required={action == 'Enter' ? true : false}
          disabled={action == 'Enter' ? false : true}
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          name="email"
          id="email"
          placeholder="yourEmail@gmail.com"
          fullWidth
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
          error={errors.email ? true : false}
          helperText={errors.email && 'Please enter a valid email address'}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="phoneNumber"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          {action} Phone Number
        </InputLabel>
        <ControlledTelInput
          name="phoneNumber"
          control={control}
          required
          defaultCountry="PK"
          id="phoneNumber"
          fullWidth
          autoComplete="phoneNumber"
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber && 'Phone number is required'}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="password"
          variant="standard"
          required={action == 'Enter' ? true : false}
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          {action} Password
        </InputLabel>
        <ControlledTextInput
          control={control}
          required={action == 'Enter' ? true : false}
          minLength={5}
          name="password"
          id="password"
          type={showPassword}
          fullWidth
          autoComplete="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={passwordDisplay}
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  {showPassword == 'password' ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={errors.password ? true : false}
          helperText={
            errors.password && 'Password must be at least 5 characters long'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="confirmPassword"
          variant="standard"
          required={action == 'Enter' ? true : false}
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Confirm Password
        </InputLabel>

        <ControlledTextInput
          control={control}
          required={action == 'Enter' ? true : false}
          validate={(value) => value === getValues('password')}
          id="confirmPassword"
          name="confirmPassword"
          fullWidth
          autoComplete="confirmPassword"
          type={showConfirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={confirmPasswordDisplay}
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  {showConfirmPassword == 'password' ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={errors.confirmPassword ? true : false}
          helperText={
            errors.confirmPassword && 'Passwords do not match. Please try again'
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="gender"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Gender
        </InputLabel>
        <ControlledSelect
          control={control}
          required
          name="gender"
          id="gender"
          defaultValue="male"
          autoComplete="gender"
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </ControlledSelect>
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="nationality"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Nationality
        </InputLabel>
        <ControlledSelect
          control={control}
          required
          name="nationality"
          defaultValue="pakistan"
          id="nationality"
          autoComplete="Pakistan"
          fullWidth
        >
          <MenuItem value="pakistan">Pakistan</MenuItem>
        </ControlledSelect>
      </Grid>

      <Grid item xs={12}>
        <InputLabel
          htmlFor="image"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          {action} Profile Image
        </InputLabel>
        {/* <Dropzone /> */}
        <ControlledDropzone
          control={control}
          getValues={getValues}
          setValue={setValue}
          // required
          name="image"
          id="image"
          error={errors.image ? true : false}
          helperText={'Image is required'}
        />
      </Grid>
    </>
  )
}

export default AddCustomer
