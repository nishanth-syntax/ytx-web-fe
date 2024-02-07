import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import DataBadge from '../DataBadge'

const MainHeader = () => (
  <Header as='h2'>
        <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> YTX
        <DataBadge />
  </Header>
)

export default MainHeader