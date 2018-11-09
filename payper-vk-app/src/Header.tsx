import { Box, Heading } from 'grommet'
import * as React from 'react';


export default class Header extends React.Component {
    public render() {
        return (
            <Box
                tag='header'
                background='brand'
                pad='medium'
                elevation='small'
                direction='row'
                justify='center'
            >
                <Heading level={"3"} margin='none' color='white'>
                    payper
                </Heading>
            </Box>
        );
    }
}