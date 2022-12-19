import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import PaymentActions from '../Generic/PaymentActions'
import ComplaintStatus from '../Generic/ComplaintStatus'
import SearchField from '../Generic/SearchField'
import Export from '../Generic/Export'
import { ViewReviewsIcon } from '../../public/icons/ViewReviewsIcon'

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'Paid By', width: 200 },
  { field: 'date', headerName: 'Payed On', width: 150 },
  { field: 'method', headerName: 'Payment Via', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: () => {
      return (
        <PaymentActions
          text={'Are you sure you want to delete this Payment?'}
          warningText={'This action is irreversable!'}
          viewText={'Payment Details here'}
          type={'Payment'}
        />
      )
    },
  },
]

const rows = [
  {
    id: 1,
    name: 'Hashaam Khan',
    date: '12/12/12',
    method: 'MasterCard',
    actions: 'iconsHere',
  },
]

export default function ViewPayments() {
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
            View Payments
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
