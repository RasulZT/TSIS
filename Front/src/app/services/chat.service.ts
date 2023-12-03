import {Injectable, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Message} from "../core/interfaces/message";

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit{

  constructor() { }
  conversation = new Subject<Message[]>();

  messageMap: any = {
    'Привет': 'Hello',
  };

  getBotAnswer(msg: any) {
    const userMessage: Message = {
      text: { text: [msg] },
      role: 'user',
    };
    this.conversation.next([userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        text: { text: [this.getBotMessage(msg)] },
        role: 'bot',
      };
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }

  ngOnInit(): void {
  }
}
