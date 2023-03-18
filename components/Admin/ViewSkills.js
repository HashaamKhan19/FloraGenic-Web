import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import { ViewReviewsIcon } from '../../public/icons/ViewReviewsIcon'
import SearchField from '../Generic/SearchField'
import Export from '../Generic/Export'
import BlockToggle from '../Generic/BlockToggle'
import ReviewActions from '../Generic/ReviewActions'
import ActionIcons from '../Generic/ActionIcons'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 150 },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
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
          type="skill"
          text={'Are you sure you want to delete this skill?'}
          viewText={'Details of Skill Here'}
          warningText={'This action cannot be undone.'}
        />
      )
    },
  },
]

const rows = [
  {
    id: 1,
    name: 'Snow',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 2,
    name: 'Lannister',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 3,
    name: 'Lannister',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 4,
    name: 'Stark',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 5,
    name: 'Targaryen',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 6,
    name: 'Melisandre',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 7,
    name: 'Clifford',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 8,
    name: 'Frances',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
  {
    id: 9,
    name: 'Roxie',
    description: 'Very Beautiful Skill',
    status: true,
    actions: true,
  },
]

export default function ViewSkills() {
  const [searchValue, setSearchValue] = React.useState('')

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
            <ViewReviewsIcon sx={{ mt: 1 }} fontSize="large" />
            View Skills
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
          <SearchField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
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
