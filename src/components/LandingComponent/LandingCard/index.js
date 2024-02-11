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
        <Container key={`landing-card-id-${dataIndex}`}>
            <Grid>
                <GridColumn  key={1}>
                    <HeaderLabel headerLabelText={mainHeader} headerLabelSize={LABEL_SIZE_HUGE} />
                    {/* <Container style={{...STYLE_MAIN_CONTAINER, ...{paddingLeft: 15, alignContent: 'flex-start',alignItems: 'flex-start',justifyContent: 'flex-start',}}}>
                        <Button size='tiny'>{PAGE_TEXT_SEARCH}</Button>
                    </Container> */}
                </GridColumn>
            </Grid>
        </Container>
    )
}

export default LandingCard;
