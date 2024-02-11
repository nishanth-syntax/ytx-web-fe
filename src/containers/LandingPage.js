import React from 'react'
import {
    Card,
    Container,
    CardHeader,
    Image,
    List,
} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import sampleDataArray from '../data/sampleData.json';
import LandingCard from '../components/LandingComponent/LandingCard';
import { APP_COLOR_SELECTED, LABEL_COLOR_MAIN, PAGE_POOL, STYLE_MAIN_CONTAINER } from '../constants';
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
        <Container style={{ margin: 20 }}>
            <List horizontal style={{
                display: 'flex',
                flex: 1,
                height: '15vh',
                overflowX: 'scroll',
            }}>
                {sampleDataArray.map((landingPageData, index) => (
                    <Container style={{
                        flex: 1,
                        verticalAlign: 'middle',
                        width: '50%',
                        padding: 3
                    }}>
                        <Card
                            style={{ width: '120px' }}
                            key={`main-id-${index}`}
                            onClick={handleClick}
                        >
                            <Image
                                key={`image-id-${index}`}
                                src={"https://cdn.dribbble.com/users/1229964/screenshots/15564939/media/e326e8be96f692b4fe0a6940e6b1f45f.jpg?resize=1600x1200&vertical=center"} wrapped ui={false} />
                        </Card>
                    </Container>
                ))}
            </List>
            <List horizontal style={{
                width: '100%',
                height: '70vh',
                overflowY: 'scroll'
            }}>
                {sampleDataArray.map((landingPageData, index) => (
                    <Card
                        style={{
                            width: '100%',
                            background: APP_COLOR_SELECTED
                        }}
                        key={`main-id-${index}`}
                        onClick={handleClick}
                    >
                        <Image key={`image-id-${index}`} src={landingPageData.imageURL} wrapped ui={false} />
                        <CardHeader style={{ height: 60, background: LABEL_COLOR_MAIN, marginBottom: 10 }}>
                            Matthew
                        </CardHeader>
                    </Card>
                ))}
            </List>
        </Container>
    )
}

export default LandingPage;
