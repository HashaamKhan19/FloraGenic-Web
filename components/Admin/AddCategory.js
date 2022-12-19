import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material'
import { CategoryIcon } from '../../public/icons/CategoryIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Controlled components
import { useForm } from 'react-hook-form'
import ControlledTextInput from '../Generic/ControlledComponents/ControlledTextInput'
import ControlledDropzone from '../Generic/ControlledComponents/ControlledDropzone'

const AddCategory = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  const [action, setAction] = React.useState('Enter')
  const [action2, setAction2] = React.useState('Add')

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  React.useEffect(() => {
    const parts = router.pathname.split('/')
    parts[parts.length - 1] == 'addCategory' ? action : setAction('Edit')
    parts[parts.length - 1] == 'addCategory' ? action2 : setAction2('Edit')
  }, [router])

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <CategoryIcon sx={{ mr: 1, mb: 0.3 }} fontSize="large" />
            {action2} Category
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="categoryName"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: 'text.primary',
                    '& span': { color: 'error.light' },
                  }}
                >
                  {action} Category Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="categoryName"
                  name="categoryName"
                  fullWidth
                  autoComplete="Category Name"
                  error={errors.categoryName ? true : false}
                  helperText={
                    errors.categoryName && 'Category Name is required'
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="categoryDescription"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: 'text.primary',
                    '& span': { color: 'error.light' },
                  }}
                >
                  {action} Category Description
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="categoryDescription"
                  name="categoryDescription"
                  fullWidth
                  multiline
                  rows={2}
                  autoComplete="Category Description"
                  error={errors.categoryDescription ? true : false}
                  helperText={
                    errors.categoryDescription &&
                    'Category Description is required'
                  }
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
                  {action} Profile Image
                </InputLabel>
                <ControlledDropzone
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  // required
                  name="image"
                  id="image"
                />
                {errors.image && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    Image is required
                  </Typography>
                )}
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
                  <CategoryIcon sx={{ mr: 0.3, mb: 0.2 }} fontSize="small" />
                  <span class="relative">{action2} Category</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
    </>
  )
}

export default AddCategory
