import React from 'react'
import './Footer.css'
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid } from '@material-ui/core';
import { Slider } from '@material-ui/core';
function Footer() {
    return (
        <div className="footer">

            <div className="footer_left">

                <img className="album_logo" src="" alt=""/>
                <div className="song_info">

                </div>

            </div>
            <div className="footer_center">

                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <RepeatIcon className="footer_green"/>


            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                    <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>

                </Grid>

            </div>
            
        </div>
    )
}

export default Footer
