import React from 'react'
import { Grid, GridColumn, Checkbox } from 'semantic-ui-react'
import LandingPageContext from '../Contexts/LandingPageContext';

const SideBar = () => {
    const { showLandingSheet, setLandingVisible } = React.useContext(LandingPageContext);

    return (
        <Grid columns={1}>
            <GridColumn>
                <Checkbox
                    checked={showLandingSheet}
                    label={{ children: <code>showLandingSheet</code> }}
                    onChange={(e, data) => setLandingVisible(data.checked)}
                />
            </GridColumn>
        </Grid>
    )
}

export default SideBar;