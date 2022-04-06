import React from "react";
import './App.css'
import 'firebase/database'
import VideoChat from './VideoChat'

class VideoChatContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            database:null,
            connectedUser:null,
            localStream:null,
            localConnection:null
        }
        this.localVideoRef = React.createRef()
        this.remotevideoRef = React.createRef()
    }

    componentDidMount = async () => {
        //initalise firebase

        //getting local video stream

        //create the local connection
    }

    shouldComponentUpdate (nextProps, nextState) {
        // prevent rerenders if not necessary
        return true

    }

    startCall = async (username, userToCall) => {
        // listen to the events first


        // create a new offer
    }
  
    onLogin = async (username) => {
        //do the login thing
    }

    setLocalVideoRef = ref => {
        this.localVideoRef = ref
    }

    setRemoteVideoRef = ref => {
        this.remotevideoRef = ref
    }

    handleUpdate = (notif, username) => {
        // read the recieved notif and apply it

    }

    render() {
        return <VideoChat
            startCall={this.startCall}
            onLogin={this.onLogin}
            setLocalVideoRef={this.setLocalVideoRef}
            setRemoteVideoRef={this.setRemoteVideoRef}
            connectedUser={this.state.connectedUser}
            />
    }
}

export default VideoChatContainer