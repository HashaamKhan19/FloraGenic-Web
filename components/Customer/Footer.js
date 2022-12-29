import React from 'react'
import { Box } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { Typography } from '@mui/material'

const Footer = () => (
  <Grid container justifyContent={'center'} bgcolor="lightgrey">
    <Grid item xs={12} sm={6} md={3} justifyContent={'center'}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">FloraGenic Logo</Typography>
        <List dense={true} disablePadding disableGutters>
          <ListItem disableGutters disablePadding>
            <ListItemText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              eum minima dolore consequatur tempore deleniti.
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Customer Care</Typography>
        <List dense={true} disablePadding disableGutters>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Press" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Jobs" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Company</Typography>
        <List dense={true}>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Press" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Jobs" />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Box>
    </Grid>
  </Grid>
)

export default Footer
