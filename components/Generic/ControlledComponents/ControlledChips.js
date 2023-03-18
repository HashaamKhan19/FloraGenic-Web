import { useState } from 'react'
import { Chip } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

export default function CheckableChips() {
  const [selected, setSelected] = useState([])

  const handleChipClick = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  const renderChips = () => {
    const chips = ['Chip 1', 'Chip 2', 'Chip 3']

    return chips.map((chip) => {
      const isSelected = selected.includes(chip)

      return (
        <Chip
          key={chip}
          label={chip}
          onClick={() => handleChipClick(chip)}
          clickable={!isSelected}
          icon={
            isSelected ? (
              <DoneIcon color={isSelected ? '#fff' : 'inherit'} />
            ) : null
          }
          sx={{
            backgroundColor: isSelected ? '#62A82C' : '#E5E5E5',
            color: isSelected ? '#fff' : 'text.primary',
            paddingX: '0.3rem',
            marginX: '0.2rem',
            cursor: 'pointer',
            marginY: '0.2rem',
          }}
        />
      )
    })
  }

  return <div>{renderChips()}</div>
}
