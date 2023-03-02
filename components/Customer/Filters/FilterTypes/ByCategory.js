import { Box, NavLink } from '@mantine/core'
import { useState } from 'react'

const categories = [
  { label: 'All' },
  { label: 'Plants' },
  { label: 'Medicines' },
  { label: 'Tools' },
  { label: 'Decorations' },
  { label: 'Seeds' },
]

const ByCategory = () => {
  const [active, setActive] = useState([0])

  const isSelected = (index) => active.length === 0 || active.includes(index)

  const items = categories.map((item, index) => (
    <NavLink
      key={item.label}
      active={isSelected(index)}
      label={item.label}
      onClick={() => {
        if (isSelected(index)) {
          setActive(active.filter((i) => i !== index))
        } else {
          setActive([...active, index])
        }
      }}
      color="green"
      variant="subtle"
    />
  ))

  return <Box>{items}</Box>
}
export default ByCategory
