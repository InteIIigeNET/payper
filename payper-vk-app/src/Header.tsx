import { Box, Heading } from 'grommet'
import * as React from 'react';
import './Header.css'

export default class Header extends React.Component {
    public render() {
        return (
            <div className='app-bar'>
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
            </div>
        );
    }
}