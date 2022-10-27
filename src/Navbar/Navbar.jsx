import React, { Component } from 'react';
import './Navbar.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Card from '../Card/Card'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { green } from '@mui/material/colors';




class Navbar extends Component {

    render() {
        return (
            <div>
                <header>
                    <PopupState variant="popper" popupId="demo-popup-popper">
                        {(popupState) => (
                            <div>
                                <Button sx={{ bgcolor: green[500] }} variant="contained" {...bindToggle(popupState)}>
                                    My Profile
                                </Button>
                                <Popper {...bindPopper(popupState)} transition>
                                    {({ TransitionProps }) => (

                                        <Fade {...TransitionProps} timeout={550}>
                                            <Paper>
                                                <Typography sx={{ p: 0 }}><Card /></Typography>
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </div>
                        )}
                    </PopupState>
                    <h1>LOGO</h1>
                </header>
            </div>
        )
    }

}

export default Navbar