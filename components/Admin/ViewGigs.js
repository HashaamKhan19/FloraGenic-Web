import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Typography } from '@mui/material'
import { PersonAdd } from '@mui/icons-material'
import ActionIcons from '../Generic/ActionIcons'
import BlockToggle from '../Generic/BlockToggle'
import SearchField from '../Generic/SearchField'
import Export from '../Generic/Export'
import Link from 'next/link'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'image', headerName: 'Image', width: 70 },
  {
    field: 'title',
    headerName: 'Gig Title',
    width: 150,
  },
  { field: 'owner', headerName: 'Gig Owner', width: 280 },
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
          text={'Are you sure you want to delete this gig?'}
          warningText={
            'Deleting this gig will also delete all the orders related to this gig'
          }
          viewText={'View Gig Details'}
          type={'gig'}
        />
      )
    },
  },
]

const rows = [
  {
    id: 1,
    image: 'Null',
    title: 'aksjdhaskjdh',
    owner: 'Hashaam',
    status: 'Active',
    actions: 'iconsHere',
  },
]

export default function ViewGigs() {
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
            <DisplaySettingsIcon sx={{ mr: 1 }} fontSize="large" />
            View Gigs
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

          <Link href={'/admin/addGig'}>
            <button className="bg-floraGreen px-3 py-[2px] rounded-md shadow-md text-white hover:scale-[1.02] transition duration-500">
              <DisplaySettingsIcon
                sx={{ color: 'white', mr: 1 }}
                fontSize="medium"
              />
              Add Gig
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
