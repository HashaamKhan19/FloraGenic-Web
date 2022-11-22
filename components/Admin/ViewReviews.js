import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import BlockToggle from '../Generic/BlockToggle'
import ReviewActions from '../Generic/ReviewActions'
import SearchField from '../Generic/SearchField'
import Export from '../Generic/Export'
import { ViewReviewsIcon } from '../../public/icons/ViewReviewsIcon'
import Ratings from '../Generic/Ratings'

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'image', headerName: 'Image', width: 80 },
  { field: 'type', headerName: 'Type', width: 160 },
  {
    field: 'name',
    headerName: 'Added By',
    width: 150,
  },
  { field: 'date', headerName: 'Added On', width: 150 },
  { field: 'review', headerName: 'Review', width: 180 },
  {
    field: 'ratings',
    headerName: 'Ratings',
    width: 150,
    headerAlign: 'center',
    renderCell: () => {
      return <Ratings />
    },
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
      return <ReviewActions />
    },
  },
]

const rows = [
  {
    id: 1,
    image: 'Null',
    type: 'Nursery',
    name: 'Hashaam',
    date: '12/12/12',
    review: 'Good Nursery',
    ratings: 5,
    status: 'Active',
    actions: 'iconsHere',
  },
  {
    id: 2,
    image: 'Null',
    type: 'Product',
    name: 'Abdullah',
    date: '12/12/12',
    review: 'Bad Product',
    ratings: 5,
    status: 'Active',
    actions: 'iconsHere',
  },
]

export default function ViewReviews() {
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
            <ViewReviewsIcon sx={{ mt: 1 }} fontSize="large" />
            View Reviews
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
