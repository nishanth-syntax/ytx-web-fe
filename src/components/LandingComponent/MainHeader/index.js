import { Header, Image, Grid, GridColumn, Label } from 'semantic-ui-react'
import { APP_NAME, LABEL_SIZE_BIG } from '../../../constants'

import { HeaderLabel } from './HeaderLabel'

const MainHeader = () => (
  <Header as='h2' style={{ width: '100%', marginLeft: 20, marginBottom: 0 }}>
    <Grid style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
      <GridColumn style={{ display: 'flex' }} key={1}>
        <Image style={{ width: 50, height: 50 }} circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
        <HeaderLabel headerLabelSize={LABEL_SIZE_BIG} headerLabelText={APP_NAME} />
      </GridColumn>
    </Grid>
  </Header>
)

export default MainHeader