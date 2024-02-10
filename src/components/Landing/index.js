import React from 'react'
import {
    Card,
    Container,
    Image,
} from 'semantic-ui-react'
import sampleDataArray from '../../data/sampleData.json';
import LandingCard from '../LandingCard';
import LandingPageContext from '../Contexts/LandingPageContext';

const LandingPage = () => {
    const { setSelectedData, setLandingVisible } = React.useContext(LandingPageContext);
    return (
        <Container style={{ margin: 20, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>            
            {sampleDataArray.map((landingPageData, index) => (
                <Card
                    style={{width: '100%'}}
                    key={`main-id-${index}`}
                    onClick={() => {
                        console.warn(`CLICK!`)
                        setSelectedData(sampleDataArray[index]);
                        setLandingVisible(true);
                    }}
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
