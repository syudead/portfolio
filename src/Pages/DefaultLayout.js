import React from 'react'
import { Link } from 'react-router-dom'

// material ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import AccountIcon from '@material-ui/icons/AccountCircle'

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleDrawerOpen() {
    this.setState({open: true})
  }

  handleDrawerClose() {
    this.setState({open: false})
  }

  render() {
    const { children } = this.props
    const { open } = this.state

    return (
      <>
        <CssBaseline />
        <AppBar>
          <Toolbar disableGutters={!open}>
            <IconButton onClick={(e) => this.handleDrawerOpen(e)}>
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{textDecoration: 'none'}}>
              <Typography variant="h6" noWrap>
                Works
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer open={open} ModalProps={{onBackdropClick: (e) => this.handleDrawerClose(e)}}>
          <div>
            <IconButton onClick={(e) => this.handleDrawerClose(e)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Link to="/about">
            <ListItem button>
              <ListItemIcon><AccountIcon /></ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
          </Link>
        </Drawer>
        <main style={{paddingTop: 80}}>{children}</main>
      </>
    )
  }
}

export default DefaultLayout
