import React from 'react'
import { Link } from 'react-router-dom'

// material ui
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import OpenInNewIcon from '@material-ui/icons/OpenInNew'

// local
import DefaultLayout from './DefaultLayout';

const ListPage = () => (
  <DefaultLayout>
    <div style={{marginLeft: 24, marginRight: 24}}>
      <Grid container spacing={40}>
        <Item />
      </Grid>
    </div>
  </DefaultLayout>
)

const Item = () => (
  <Grid item sm={6} md={4} lg={3}>
    <Card>
      <CardMedia
        style={{paddingTop: '56.25%'}}
        image="/images/sc1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Digital Asset Management
        </Typography>
        <Typography gutterBottom>
          オンライン上でファイルを管理するWebアプリケーション。
        </Typography>
        <Typography gutterBottom>
          spa / grpahql / phoenixframework / elixir / react.js / react-router v4
        </Typography>
        <Typography>
          デモサイトBasic認証: guest / guest
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href="https://each-mediumspringgreen-condor.gigalixirapp.com" target="_blank">
          <OpenInNewIcon />
        </Button>
      </CardActions>
    </Card>
  </Grid>
)

export default ListPage
