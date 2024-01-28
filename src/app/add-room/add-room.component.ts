import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  formValue: FormGroup;

  constructor(private roomService: RoomService, private formBuilder: FormBuilder) {
    this.formValue = this.formBuilder.group({
      naziv: ['', Validators.required],
      klima: [false],
      miniBar: [false],
      sauna: [false]
    });
  }

  ngOnInit(): void {}

  postRoomDetails(): void {
    const room = this.formValue.value;
    this.roomService.addRoom(room).subscribe(() => {
      console.log('Soba je dodata.');
      this.resetForm();
    });
  }
  

  private resetForm(): void {
    this.formValue.reset();
  }
}
