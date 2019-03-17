import React from 'react'

import Typography from '@material-ui/core/Typography'

import DefaultLayout from './DefaultLayout'

const AboutPage = () => (
  <DefaultLayout>
    <div style={{padding: 20}}>
      <Typography gutterBottom variant="h5" component="h2">
        このサイトについて
      </Typography>
      <Typography>
        本サイトでは自身の個人製作のサイトを掲載しています。
      </Typography>
    </div>
  </DefaultLayout>
)

export default AboutPage
