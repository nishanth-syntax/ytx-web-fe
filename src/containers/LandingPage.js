import React from 'react'
import {
    Card,
    Container,
    Image,
} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import sampleDataArray from '../data/sampleData.json';
import LandingCard from '../components/LandingComponent/LandingCard';
import { PAGE_POOL, STYLE_MAIN_CONTAINER } from '../constants';

const LandingPage = () => {
    let navigate = useNavigate();
    // const { setSelectedData, setLandingVisible } = React.useContext(LandingPageContext);

    function handleClick() {
        // console.warn(`CLICK!`)
        // setSelectedData(sampleDataArray[index]);
        // setLandingVisible(true);        
        navigate(PAGE_POOL);
    }

    return (
        <Container style={STYLE_MAIN_CONTAINER}>
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
