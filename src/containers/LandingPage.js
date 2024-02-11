import React from 'react'
import {
    Card,
    Container,
    Image,
    List,
} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import sampleDataArray from '../data/sampleData.json';
import LandingCard from '../components/LandingComponent/LandingCard';
import { PAGE_POOL, STYLE_MAIN_CONTAINER } from '../constants';
import { HeaderLabel } from '../components/LandingComponent/MainHeader/HeaderLabel';

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
        <Container style={{ padding: 5, margin: 5 }}>
            <List horizontal style={{ height: '70vh', overflowY: 'scroll' }}>
                {sampleDataArray.map((landingPageData, index) => (
                    <Card
                        style={{ width: '100%' }}
                        key={`main-id-${index}`}
                        onClick={handleClick}
                    >
                        <Image key={`image-id-${index}`} src={landingPageData.imageURL} wrapped ui={false} />
                    </Card>
                ))}
            </List>
            <List horizontal style={{ display: 'flex', flex: 1, height: '100%', overflowX: 'scroll' }}>
                {sampleDataArray.map((landingPageData, index) => (
                    <Container style={{flex: 1, verticalAlign: 'middle'}}>
                        <Card
                            style={{ height: '100%' }}
                            key={`main-id-${index}`}
                            onClick={handleClick}
                        >                            
                            <Image key={`image-id-${index}`} src={landingPageData.imageURL} wrapped ui={false} />
                        </Card>
                    </Container>
                ))}
            </List>
        </Container>
    )
}

export default LandingPage;
