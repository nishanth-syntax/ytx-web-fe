import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Container,
    Icon,
} from 'semantic-ui-react'
import LandingPageContext from '../Contexts/LandingPageContext'

const DetailsCard = () => {
    const { selectedData } = React.useContext(LandingPageContext)
    return (
        <Container key={`details-card-id-${selectedData?.dataIndex}`} style={{ margin: 5, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <CardContent key={`details-card-id-${selectedData?.dataIndex}`}>
                <CardHeader>{selectedData?.mainHeader}</CardHeader>
                <CardMeta>
                    <span className='date'>{selectedData?.subHeader}</span>
                </CardMeta>
                <CardDescription>
                    {selectedData?.description}
                </CardDescription>
            </CardContent>
            <CardContent >
                <a>
                    <Icon name='user' />
                    {selectedData?.bottomText}
                </a>
            </CardContent>
        </Container>
    )
}

export default DetailsCard;
