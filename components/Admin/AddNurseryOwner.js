import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { MuiTelInput } from 'mui-tel-input'
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { VisibilityOff, Visibility, AlternateEmail } from '@mui/icons-material'
import DropZone from '../Generic/Dropzone'

const AddNurseryOwner = () => {
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
          Enter First Name
        </InputLabel>
        <TextField
          id="firstName"
          name="firstName"
          fullWidth
          autoComplete="family-name"
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
          Enter Last Name
        </InputLabel>
        <TextField
          id="lastName"
          name="lastName"
          fullWidth
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="email"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Enter Email
        </InputLabel>
        <TextField
          id="email"
          name="email"
          fullWidth
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
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
          Phone Number
        </InputLabel>
        <MuiTelInput
          defaultCountry="PK"
          id="phoneNumber"
          name="phoneNumber"
          fullWidth
          autoComplete="phoneNumber"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="password"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Enter Password
        </InputLabel>
        <TextField
          id="password"
          name="password"
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
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="confirmPassword"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Confirm Password
        </InputLabel>

        <TextField
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
        <Select id="gender" name="gender" autoComplete="gender" fullWidth>
          <MenuItem value="male" selected>
            Male
          </MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
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
        <Select
          id="nationality"
          name="nationality"
          autoComplete="Pakistan"
          fullWidth
        >
          <MenuItem value="pakistan" selected>
            Pakistan
          </MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <InputLabel
          htmlFor="Address"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          Address
        </InputLabel>
        <TextField
          id="Address"
          name="Address"
          multiline
          rows={4}
          fullWidth
          autoComplete="Address"
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel
          htmlFor="CNIC"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: 'text.primary',
            '& span': { color: 'error.light' },
          }}
        >
          CNIC
        </InputLabel>
        <TextField
          id="CNIC"
          name="CNIC"
          required
          fullWidth
          autoComplete="CNIC"
        />
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
          Profile Image
        </InputLabel>
        <DropZone />
      </Grid>
    </>
  )
}

export default AddNurseryOwner
