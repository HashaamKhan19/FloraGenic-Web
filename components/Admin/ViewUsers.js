import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Typography } from '@mui/material'
import { PersonAdd } from '@mui/icons-material'
import ActionIcons from '../Generic/ActionIcons'
import BlockToggle from '../Generic/BlockToggle'
import SearchField from '../Generic/SearchField'
import Export from '../Generic/Export'
import Link from 'next/link'
import { UsersIcon } from '../../public/icons/UsersIcon'

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'image', headerName: 'Image', width: 70 },
  { field: 'role', headerName: 'Role', width: 100 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 150,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'email', headerName: 'Email Address', width: 180 },
  { field: 'phone', headerName: 'Phone Number', width: 180 },
  { field: 'address', headerName: 'Address', width: 220 },
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
      return <ActionIcons type="user" />
    },
  },
]

const rows = [
  {
    id: 1,
    image: 'Null',
    role: 'Admin',
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'jonSnow@gmail.com',
    phone: 35312322,
    address: 'Liaqatbagh Stadium Rawat Road',
    status: 'Active',
    actions: 'iconsHere',
  },
]

export default function ViewUsers() {
  const [anchorElImport, setAnchorElImport] = React.useState(null)
  const [anchorElExport, setAnchorElExport] = React.useState(null)
  const importOpen = Boolean(anchorElImport)
  const exportOpen = Boolean(anchorElExport)

  // Menu handlers
  const handleImportClick = (event) => {
    setAnchorElImport(event.currentTarget)
  }
  const handleImportClose = () => {
    setAnchorElImport(null)
  }
  const handleExportClick = (event) => {
    setAnchorElExport(event.currentTarget)
  }
  const handleExportClose = () => {
    setAnchorElExport(null)
  }

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
            <UsersIcon sx={{ mr: 1, mb: 0.3 }} fontSize="medium" />
            View Users
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

          <Link href={'/admin/addUser'}>
            <button className="bg-floraGreen px-3 py-1 rounded-md shadow-md text-white hover:scale-[1.02] transition duration-500">
              <UsersIcon
                sx={{ color: 'white', mr: 1, mb: 0.3 }}
                fontSize="small"
              />
              Add User
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
