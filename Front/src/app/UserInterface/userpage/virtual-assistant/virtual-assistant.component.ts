import {Component, OnInit} from '@angular/core';
import {Message} from "../../../core/interfaces/message";
import {ChatService} from "../../../services/chat.service";

@Component({
  selector: 'app-virtual-assistant',
  templateUrl: './virtual-assistant.component.html',
  styleUrls: ['./virtual-assistant.component.scss']
})
export class VirtualAssistantComponent implements OnInit{
  messages:Message[]=[];
  value:string|undefined;
  dialogInfo:any;
  isChatOpen: boolean=false;
  constructor(public chatService:ChatService) {
  }

  ngOnInit(): void {
    this.chatService.conversation.subscribe((val)=>{
      this.messages = this.messages.concat(val);
    })
  }
  toggleChat() {
    this.isChatOpen = true;
  }
  sendMessage(){
    this.chatService.getBotAnswer(this.value);
    this.value='';
  }

  closeChat() {
    this.isChatOpen=false;
  }
}
