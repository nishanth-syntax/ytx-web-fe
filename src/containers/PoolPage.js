import {
    Card,
    Container,
    Image,
} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import { STYLE_MAIN_CONTAINER } from '../constants';
import LandingPage from './LandingPage';

const PoolPage = () => {
    let navigate = useNavigate();

    return (
        <Container style={{...STYLE_MAIN_CONTAINER, ...{backgroundColor: '#efefef'}}}>
            <LandingPage />
        </Container>
    )
}

export default PoolPage;