import { useQuery } from '@apollo/client'
import * as React from 'react'
import { ViewReviewsIcon } from '../../../public/icons/ViewReviewsIcon'
import DataTable from '../../Generic/DataTable'
import LoadingScreen from '../../Generic/LoadingScreen'
import { columns } from './columns'
import { GET_COMPLAINTS } from './queries'

export default function ViewComplants() {
  const { loading, error, data } = useQuery(GET_COMPLAINTS)

  const [rows, setRows] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    if (data?.complaints?.length) {
      setRows(() => {
        return data?.complaints?.filter((complaint) => {
          return complaint
        })
      })
    }
  }, [data, searchValue])

  if (loading) return <LoadingScreen />

  return (
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Complaints"
      Icon={ViewReviewsIcon}
    />
  )
}
