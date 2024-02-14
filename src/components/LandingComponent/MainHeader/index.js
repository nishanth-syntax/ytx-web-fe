import { Header, Image, Grid, GridColumn, Container } from 'semantic-ui-react'
import { APP_COLOR_SELECTED, APP_NAME, LABEL_SIZE_BIG, STYLE_MAIN_CONTAINER } from '../../../constants'

import { HeaderLabel } from './HeaderLabel';
import AppIcon from '../AppIcon'

const MainHeader = () => (
  <Container style={{
    display: 'flex',    
    alignItems: 'center',
    height: 30,
    margin: 15,
  }}>
    <AppIcon />
    <HeaderLabel />
  </Container>
)

export default MainHeader