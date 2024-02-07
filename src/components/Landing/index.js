import React from 'react'
import {
    Card,
    Container,
    Image,
} from 'semantic-ui-react'
import sampleDataArray from '../../data/sampleData.json';
import LandingCard from '../LandingCard';

const LandingPage = () => (
    <Container style={{ margin: 20, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {sampleDataArray.map((landingPageData, index) => (
            <Card key={`main-id-${index}`}>
                <Image key={`image-id-${index}`} src={landingPageData.imageURL} wrapped ui={false} />
                <LandingCard
                    dataIndex={index}
                    mainHeader={landingPageData.mainHeader}
                    subHeader={landingPageData.subHeader}
                    description={landingPageData.description}
                    bottomText={landingPageData.bottomText}
                />
            </Card>))}
    </Container>
)

export default LandingPage;
