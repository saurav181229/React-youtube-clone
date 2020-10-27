import React,{useState,useEffect} from 'react';
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import { SearchBar,VideoDetail,VideoList } from './components'

const App = ()=>{
    const[form,formVal] = useState({
        videos:[],
        selectedVideo:null
    })

    // useEffect(()=>{
    //     handleSubmit('home');
    // })
    const onVideoSelect = (video)=>{
        formVal({
            ...form,selectedVideo:video
        })
    }

    const handleSubmit = async(searchTerm)=>{
       
       
        const response = await youtube.get('search',{
           
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyDpk_CxJO161Ka4msaGKlUxq4cYxynCoqw',
                q:searchTerm,
            },
        });
        // let error = null;
        // if(form.videos === null){
        //     error = (<div> sorry some issue with the server</div>);
        //     return error
        // }
        console.log(response.data.items);
        formVal({
            ...form,
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
    const {selectedVideo , videos} = form;


    return(
        
           <Grid justify={"center"} container spacing={10} >
           <Grid item xs={12}>
               <Grid container spacing={10}>
                <Grid item xs={12}>
                   <SearchBar onFormSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                   <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                </Grid>
               </Grid>

           </Grid>
           </Grid>
    
    )
}

export default App;