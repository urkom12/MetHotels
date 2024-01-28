import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private pricePerNight = 30;
  private apiUrl = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) { }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  updateRoom(room: Room, roomId: number): Observable<Room> {
    const url = `${this.apiUrl}/${roomId}`;
    return this.http.put<Room>(url, room);
  }
  
  deleteRoom(id: number): Observable<Room> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Room>(url);
  }
  getPrice(numberOfNights: number): number {
    return this.pricePerNight * numberOfNights;
  }

}
