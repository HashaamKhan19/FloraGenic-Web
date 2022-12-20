import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Typography } from '@mui/material'
import ActionIcons from '../Generic/ActionIcons'
import BlockToggle from '../Generic/BlockToggle'
import SearchField from '../Generic/SearchField'
import Export from '../Generic/Export'
import Link from 'next/link'
import { CategoryIcon } from '../../public/icons/CategoryIcon'

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'image', headerName: 'Image', width: 100 },
  { field: 'categoryName', headerName: 'Category Name', width: 200 },
  {
    field: 'categoryDescription',
    headerName: 'Category Description',
    width: 220,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => {
      return <BlockToggle />
    },
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => {
      return (
        <ActionIcons
          type="category"
          viewText="Details of Category"
          text="Are you sure you want to delete this category?"
          warningText={'This action cannot be undone.'}
        />
      )
    },
  },
]

const rows = [
  {
    id: 1,
    image: 'Null',
    categoryName: 'Tools',
    categoryDescription: 'Tools serve as Tools',
    status: 'Active',
    actions: 'iconsHere',
  },
]

export default function ViewCategories() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '5%',
        paddingLeft: '5%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // mb: 5,
          p: 1.5,
          gap: 1,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          backgroundColor: 'primary.light',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            alignItems={'center'}
            sx={{ marginLeft: 1 }}
          >
            <CategoryIcon sx={{ mr: 1, mb: 0.3 }} fontSize="large" />
            View Categories
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            boxShadow: 'none',
          }}
        >
          <SearchField />

          <Link href={'/admin/addCategory'}>
            <button className="bg-floraGreen px-3 py-[6px] rounded-md shadow-md text-white hover:scale-[1.02] transition duration-500">
              <CategoryIcon
                sx={{ color: 'white', mb: 0.3, mr: 0.5 }}
                fontSize="small"
              />
              Add Category
            </button>
          </Link>

          <Export />
        </Box>
      </Box>
      <DataGrid
        sx={{
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F0F4F6',
            color: 'black',
            fontSize: 16,
          },
          boxShadow: '0 5px 5px -5px',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </Box>
  )
}
