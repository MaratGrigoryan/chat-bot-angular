import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  constructor() {}

  conversation = new Subject<Message[]>();

  messageMap = {
    "Привет": "Приветвствую вас",
    "Кто ты такой?": "Я Ангуляр бот, что вы хотите узнать",
    "Когда будет следующий курс?": "Следующий курс начинается 22 мая, приходите",
    "Спасибо": "Пожалуйста, всегда готов помочь",
    "Hi": "Hello",
    "Who are you": "My name is AngBot",
    "How are you":" I am a Agular Bot",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);

    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}