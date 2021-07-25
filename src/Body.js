import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body({spotify}) {

    const [{discover_weekly},dispatch]=useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body_info">
                <img className="body_logo" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2020/07/Discover-Weekly-Image-1.jpg"  alt="" />
            <div className="body_infotext">
                <strong>PlayList</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
                </div>

            </div>

            <div className="body_songs">
                <div className="body_icons">
                   <PlayCircleFilledIcon  className="body_shuffle"/>
                   <FavoriteIcon fontSize="large" />
                   <MoreHorizIcon />

                </div>
                {discover_weekly?.tracks.items.map((item)=>(
                    <SongRow track={item.track}/>
                ))}
            </div>
           
        </div>
    )
}

export default Body
