import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent  implements OnInit, AfterViewInit  {
  domain: string = "meet.jit.si";
  room: any;
  options: any;
  api: any;
  user: any;

  // For Custom Controls
  isAudioMuted = true;
  isVideoMuted = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.room = 'Reunión para Actividades'; // Set your room name
    this.user = {
      name: 'Usuario' // Set your username
    }
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: this.room,
      width: 1500,
      height: 670,
      configOverwrite: { prejoinPageEnabled: true },
      interfaceConfigOverwrite: {
        TITLE_VIEW_MAX_COLUMNS: 4
      },
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: this.user.name
      }
    }

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);

    // Event handlers
    this.api.addEventListeners({
      readyToClose: this.handleClose,
      participantLeft: this.handleParticipantLeft,
      participantJoined: this.handleParticipantJoined,
      videoConferenceJoined: this.handleVideoConferenceJoined,
      videoConferenceLeft: this.handleVideoConferenceLeft,
      audioMuteStatusChanged: this.handleMuteStatus,
      videoMuteStatusChanged: this.handleVideoStatus
    });
  }
  handleClose = () => {
    console.log("handleClose");
  }

  handleParticipantLeft = async (participant: any) => {
    const data = await this.getParticipants();
  }

  handleParticipantJoined = async (participant: any) => {
    const data = await this.getParticipants();
  }

  handleVideoConferenceJoined = async (participant: any) => {
    const data = await this.getParticipants();
  }

  handleVideoConferenceLeft = () => {
    this.router.navigate(['/zoom']);
  }

  handleMuteStatus = (audio: any) => {
    console.log("handleMuteStatus", audio); // { muted: true }
  }

  handleVideoStatus = (video: any) => {
    console.log("handleVideoStatus", video); // { muted: true }
  }

  getParticipants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.api.getParticipantsInfo()); // get all participants
      }, 500)
    });
  }
  executeCommand(command: string) {
    this.api.executeCommand(command);;
    if (command == 'hangup') {
      this.router.navigate(['/']);
    }

    if (command == 'toggleAudio') {
      this.isAudioMuted = !this.isAudioMuted;
    }

    if (command == 'toggleVideo') {
      this.isVideoMuted = !this.isVideoMuted;
    }
  }
}