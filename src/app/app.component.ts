import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sobaForm: FormGroup;
  naziv: string = '';
  dodatneUsluge: string[] = [];
  racun: number = 0;

  constructor(private fb: FormBuilder) {
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
      // Logika za dodavanje sobe
      console.log('Soba dodata uspešno.');
    } else {
      console.log('Nepravilno popunjena forma.');
    }
  }

  izracunajDodatneTroskove() {
    this.racun = 0;
  
    const klimaControl = this.sobaForm.get('klima');
    const miniBarControl = this.sobaForm.get('miniBar');
    const saunaControl = this.sobaForm.get('sauna');
  
    if (klimaControl && klimaControl.value) {
      this.racun += 50;
    }
    if (miniBarControl && miniBarControl.value) {
      this.racun += 30;
    }
    if (saunaControl && saunaControl.value) {
      this.racun += 80;
    }
  }
  
}
