import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MessageResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(this.apiUrl);
  }

  getHelloWorldMessage() {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
