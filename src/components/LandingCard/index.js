import React from 'react'
import {
    Button,
    CardHeader,
    CardDescription,
    CardContent,
    Container,
    Icon,
    Grid,
    GridColumn,
} from 'semantic-ui-react';
import LandingPageContext from '../Contexts/LandingPageContext';
import sampleDataArray from '../../data/sampleData.json';

const LandingCard = ({ dataIndex, mainHeader, subHeader, description, bottomText }) => {
    const { setSelectedData, setLandingVisible } = React.useContext(LandingPageContext);
    return (
        <Container key={`landing-card-id-${dataIndex}`} style={{ padding: 5, display: 'flex', flex: 1, width: '100%', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
            <Grid style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: '100%', flexDirection: 'row' }}>
                <GridColumn style={{ display: 'flex', width: '50%' }} key={1}>
                    <CardContent key={`landing-card-id-${dataIndex}`} style={{display: 'flex', flexDirection: 'column', padding: 10}}>
                        <CardHeader><h4>{mainHeader}</h4></CardHeader>                        
                        <CardDescription style={{margin: 0}}>
                            <h6>{description}</h6>
                        </CardDescription>                        
                    </CardContent>                                  
                </GridColumn>                                           
                <GridColumn style={{ display: 'flex', width: '50%', alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end',  }} key={1}>                    
                    <CardContent key={`landing-card-id-${dataIndex}`} style={{display: 'flex', flexDirection: 'column', backgroundColor: '#fffeee'}}>
                        <Button><h4>SELECT</h4></Button>                    
                    </CardContent>                    
                </GridColumn>                                           
            </Grid>


        </Container>
    )
}

export default LandingCard;
