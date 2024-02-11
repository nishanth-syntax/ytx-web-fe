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

import { HeaderLabel } from '../MainHeader/HeaderLabel';
import {
    LABEL_SIZE_LARGE,
    LABEL_SIZE_HUGE,
    PAGE_TEXT_SEARCH,
    STYLE_GRID,
    STYLE_GRID_RIGHT,
    STYLE_MAIN_CONTAINER
} from '../../../constants';


const LandingCard = ({ dataIndex, mainHeader, description }) => {
    return (
        <Container key={`landing-card-id-${dataIndex}`} style={STYLE_MAIN_CONTAINER}>
            <Grid style={STYLE_GRID}>
                <GridColumn  key={1}>
                    <HeaderLabel headerLabelText={mainHeader} headerLabelSize={LABEL_SIZE_HUGE} />
                    <Button size='tiny'>{PAGE_TEXT_SEARCH}</Button>
                </GridColumn>
            </Grid>
        </Container>
    )
}

export default LandingCard;
