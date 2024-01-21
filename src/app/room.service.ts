import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private pricePerNight: number = 30;

  getPrice(numberOfNights: number): number {
    return this.pricePerNight * numberOfNights;
  }
}
