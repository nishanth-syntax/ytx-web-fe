import React from 'react'
import { Header, Image, Grid, GridColumn, Label } from 'semantic-ui-react'
import DataBadge from '../DataBadge'

const MainHeader = () => (
  <Header as='h2' style={{ width: '100%' }}>
    <Grid style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
      <GridColumn style={{ display: 'flex' }} key={1}>
        <Image style={{ width: 50, height: 50 }} circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
        <Label style={{ width: 50, height: 30, verticalAlign: 'center', textAlign: 'left', border: 0 }} basic color='transparent'>
          <h2>YTX</h2>
        </Label>
      </GridColumn>
      {/* <GridColumn style={{display: 'flex'}} key={2}>
        <DataBadge />
      </GridColumn> */}
    </Grid>
  </Header>
)

export default MainHeader