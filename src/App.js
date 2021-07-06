import React,{useState,useEffect} from 'react'
import db from './tiktok/firebase/config';
import './tiktok/styles/style.css'
import NavSection from './tiktok/NavSec';
import VideoMain from './tiktok/videoMain';
function App() {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => 
    setVideos(snapshot.docs.map((doc) => doc.data()))
    )
  },[])

  return (
    <>
    <NavSection/>
    <div className='tiktokVideos'>
      {videos.map(
        ({page,description, music, likes, comments, shares, url}) => (
          <VideoMain
          page={page}
          description={description}
          music={music}
          likes={likes}
          comments={comments}
          shares={shares}
          url={url}

          />
        )
      )}
    </div>
    </>
  );
}

export default App;
