import {
    Grid,
    GridRow,
    GridColumn,
    Container,
    Image,
} from 'semantic-ui-react'

import { STYLE_GRID, STYLE_MAIN_CONTAINER } from '../constants';

const SelectedGrid = () => {
    return (
        <Grid style={{margin: 5}} columns={3} divided>
            <GridRow>
                <GridColumn>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </GridColumn>
                <GridColumn>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </GridColumn>
                <GridColumn>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </GridColumn>
            </GridRow>

            <GridRow>
                <GridColumn>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </GridColumn>
                <GridColumn>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </GridColumn>
                <GridColumn>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

const PoolPage = () => {
    return (
        <Container style={{ ...STYLE_MAIN_CONTAINER, ...{ backgroundColor: '#efefef' } }}>
            <Grid style={{
                ...STYLE_GRID, ...{
                    position: 'relative',
                    zIndex: -1,
                    left: 0,
                    right: 0,
                    bottom: '20px',
                    height: '100px',
                    padding: 0,
                    backgroundColor: '#ccc'
                }
            }} rows={3} divided>
                
            </Grid>
        </Container>
    )
}

export default PoolPage;