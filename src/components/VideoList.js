import React from 'react'
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem'
const VideoList = (props)=>{
    const listOfVideos = props.videos.map((video,key)=><VideoItem onVideoSelect={props.onVideoSelect} key={key} video={video} />)
 return (
     <Grid container spacing={10}>
     {listOfVideos}
     </Grid>
 )
}

export default VideoList;