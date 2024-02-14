import React from 'react'
import {
    Card,
    Container,
    Image,
} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import sampleDataArray from '../../../data/sampleData.json';
import LandingCard from '../LandingCard';

const LandingPage = () => {
    let navigate = useNavigate();
    
    function handleClick() {           
        navigate("/home");
    }

    return (
        <Container style={{ margin: 0, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
            {sampleDataArray.map((landingPageData, index) => (
                <Card
                    style={{ width: '100%' }}
                    key={`main-id-${index}`}
                    onClick={handleClick}
                >
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
}

export default LandingPage;
