import React from 'react'
import {styled, Theme} from '@material-ui/core/styles'
import './App.css'
import VideoChatContainer from './VideoChatContainer'
import VideoInput from './videoInput'

function App () {
  return (
  
    <div className='app'>
      <VideoInput/>
      <button id='button'>Select Video Input Device</button>
      <h1>React Video Chat App</h1>
      <h2>WebRTC + Firebase</h2>
      <VideoChatContainer/>
    </div>
  )
}

export default App