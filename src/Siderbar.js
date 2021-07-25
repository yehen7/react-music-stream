import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';
function Siderbar() {

    const [{playlists},dispatch]=useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="logo" src="https://th.bing.com/th/id/R.595085c38b0100436b69cfc08a68b5dc?rik=PbLYn5Z9GnzZeQ&pid=ImgRaw" alt=""/>

            <SidebarOption Icon={HomeIcon} option="Home"/>
            <SidebarOption Icon={SearchIcon}  option="Search"/>
            <SidebarOption Icon={LibraryMusicIcon}  option="Your Libarary"/>
            <br/>
            <strong className="sidebar_titile">PlayList</strong>
            <hr/>

            {playlists?.items?.map((playlists)=>(
                <SidebarOption option={playlists.name}/>
            ))}
        </div>
    )
}

export default Siderbar
