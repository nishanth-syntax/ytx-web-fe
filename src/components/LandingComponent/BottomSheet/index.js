import { useContext } from 'react';
import Sheet from 'react-modal-sheet';
import { Container } from "semantic-ui-react";
import LandingPageContext from '../Contexts/LandingPageContext';

function BottomSheet() {
    const { showLandingSheet, setLandingVisible } = useContext(LandingPageContext);
    return (
        <Container style={{ margin: 20, display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
            <Sheet
                isOpen={showLandingSheet}
                onClose={() => setLandingVisible(false)}
                snapPoints={[300, 200, 100, 0]}
            >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>

                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </Container>
    )
}

export default BottomSheet;