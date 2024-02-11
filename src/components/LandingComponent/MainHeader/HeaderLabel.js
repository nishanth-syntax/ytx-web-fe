import { Label, Container } from 'semantic-ui-react'

import { LABEL_COLOR_MAIN, APP_NAME } from '../../../constants'

const headerContainerStyle = {
    display: 'flex',
    flex: 1,    
    height: 30,    
};

const headerLabelStyle = {    
    textAlign: 'left',    
    marginLeft: -5
};

export const HeaderLabel = (props) => {
    return (
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
}