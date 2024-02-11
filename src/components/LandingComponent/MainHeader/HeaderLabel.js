import { Label, Container } from 'semantic-ui-react'

import { APP_NAME, LABEL_COLOR_MAIN } from '../../../constants'

const headerContainerStyle = {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    padding: 0
};

const headerLabelStyle = {
    width: '100%',
    height: 30,
    verticalAlign: 'baseline',
    textAlign: 'left',
    border: 0,
    paddingTop: 5,
    color: LABEL_COLOR_MAIN,
};

export const HeaderLabel = (props) => {
    return (
        (
            <Container
                style={props?.headerContainerStyle ? { ...headerContainerStyle, ...props.headerContainerStyle } : headerContainerStyle}
            >
                <Label
                    style={props?.headerLabelStyle ? { ...headerLabelStyle, ...props?.headerLabelStyle } : headerLabelStyle}
                    size={props?.headerLabelSize ?? "medium"}
                    basic={!props?.isLabelBasic}
                    color={props?.headerLabelColor ?? 'blue'}
                >
                    {props?.headerLabelText ?? APP_NAME}
                </Label>
            </Container>
        )
    )
}