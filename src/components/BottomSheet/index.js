import React from 'react'
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  GridColumn,
  Checkbox,
  Grid,
  Header,
  Icon,
  Container,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import LandingPageContext from '../Contexts/LandingPageContext';

const SideBarComponent = ({ children }) => {
  const { showLandingSheet, setLandingVisible } = React.useContext(LandingPageContext);

  return (
    <Container style={{ margin: 5, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Grid columns={1}>
        <GridColumn>
          <SidebarPushable as={Segment}>
            <Sidebar
              as={Menu}
              direction='bottom'
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() => setLandingVisible(false)}
              visible={showLandingSheet}
              width='thin'
            >
              <MenuItem as='a'>
                <Icon name='home' />
                Home
              </MenuItem>
              <MenuItem as='a'>
                <Icon name='gamepad' />
                Games
              </MenuItem>
              <MenuItem as='a'>
                <Icon name='camera' />
                Channels
              </MenuItem>
            </Sidebar>

            <SidebarPusher>
              <Segment basic>
                {children}
              </Segment>
            </SidebarPusher>
          </SidebarPushable>
        </GridColumn>
      </Grid>
    </Container>
  )
}

export default SideBarComponent
