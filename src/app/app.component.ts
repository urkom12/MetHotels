import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoomService]
})
export class AppComponent {
  sobaForm: FormGroup;
  naziv: string = '';
  dodatneUsluge: string[] = [];
  racun: number = 0;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService
  ) {
    this.sobaForm = this.fb.group({
      naziv: ['', [Validators.required, Validators.minLength(6)]],
      klima: false,
      miniBar: false,
      sauna: false
    });
  }

  watchVrednost(vrednost: string) {
    if (vrednost.length < 6) {
      console.log('Dužina vrednosti je manja od 6 karaktera.');
    }
  }

  dodajSobu() {
    if (this.sobaForm.valid) {
      console.log('Soba dodata uspešno.');
    } else {
      console.log('Nepravilno popunjena forma.');
    }
  }

  izracunajDodatneTroskove() {
    const numberOfNights = 3;
    this.racun = this.roomService.getPrice(numberOfNights); 
  }
}
