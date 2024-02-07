import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Container,
    Icon,
} from 'semantic-ui-react';
import LandingPageContext from '../Contexts/LandingPageContext';
import sampleDataArray from '../../data/sampleData.json';

const LandingCard = ({ dataIndex, mainHeader, subHeader, description, bottomText }) => {
    const { setSelectedData, setLandingVisible } = React.useContext(LandingPageContext);
    return (
        <Container key={`landing-card-id-${dataIndex}`} style={{ margin: 5, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <CardContent key={`landing-card-id-${dataIndex}`}>
                <CardHeader>{mainHeader}</CardHeader>
                <CardMeta>
                    <span className='date'>{subHeader}</span>
                </CardMeta>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardContent>
            <CardContent >
                <a>
                    <Icon name='user' />
                    {bottomText}
                </a>
            </CardContent>
        </Container>
    )
}

export default LandingCard;
