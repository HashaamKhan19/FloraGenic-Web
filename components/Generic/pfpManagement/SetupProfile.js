import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { MuiTelInput } from 'mui-tel-input'
import {
  TextField,
  Paper,
  InputLabel,
  Box,
  Select,
  MenuItem,
} from '@mui/material'
import DropZone from '../Dropzone'
import { UsersIcon } from '../../../public/icons/UsersIcon'

const SetupGardenerProfile = () => {
  const [user, setUser] = React.useState('Gardener')
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 5,
      }}
    >
      <Paper
        sx={{
          padding: 5,
          boxShadow: 5,
          width: '80%',
        }}
      >
        <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
          <UsersIcon sx={{ mr: 1 }} fontSize="large" />
          Setup Profile for {user}
        </h1>
        <Grid container spacing={3} mt={2}>
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
              htmlFor="phoneNumber"
              variant="standard"
              required
              sx={{
                mb: 1.5,
                color: 'text.primary',
                '& span': { color: 'error.light' },
              }}
            >
              Enter Phone Number
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
              htmlFor="CNIC"
              variant="standard"
              required
              sx={{
                mb: 1.5,
                color: 'text.primary',
                '& span': { color: 'error.light' },
              }}
            >
              Enter CNIC
            </InputLabel>
            <TextField
              id="CNIC"
              name="CNIC"
              required
              fullWidth
              autoComplete="CNIC"
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
              Enter Address
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
              htmlFor="image"
              variant="standard"
              required
              sx={{
                mb: 1.5,
                color: 'text.primary',
                '& span': { color: 'error.light' },
              }}
            >
              Enter Profile Image
            </InputLabel>
            <DropZone />
          </Grid>

          <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
            <button class="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
              <span class="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  class="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </span>
              <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  class="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </span>
              <UsersIcon sx={{ mr: 1 }} fontSize="small" />
              <span class="relative">Add {user}</span>
            </button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default SetupGardenerProfile
