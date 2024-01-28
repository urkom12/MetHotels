import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../room.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {
  sobe: any[] = [];
  showEditModal: boolean = false;

  updateForm: FormGroup = this.formBuilder.group({
    id: [''],
    naziv: ['', Validators.required],
    klima: [false],
    miniBar: [false],
    sauna: [false]
  });

  constructor(private roomService: RoomService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  private loadRooms(): void {
    this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        if (data) {
          this.sobe = data;
        } else {
          console.error('Invalid data received:', data);
        }
      },
      (error) => {
        console.error('Error loading rooms:', error);
      }
    );
  }

  updateRoomDetails(): void {
    const updatedRoom = this.updateForm.value;
  
    if (!updatedRoom.id) {
      console.error('Missing id in the updated room data.');
      return;
    }
  
    this.roomService.updateRoom(updatedRoom, updatedRoom.id).subscribe(() => {
      this.loadRooms();
      this.showEditModal = false;
    });
  }

  selectedRoom: Room | undefined;

  onEdit(room: Room): void {
    this.selectedRoom = room;
    this.updateForm.setValue({
      id: room.id,
      naziv: room.naziv,
      klima: room.klima,
      miniBar: room.miniBar,
      sauna: room.sauna
    });
  
    this.showEditModal = true;
  }

  deleteRoom(room: Room): void {
    const roomId = room.id;

    if (roomId === undefined) {
      console.error('Room ID is undefined.');
      return;
    }

    if (confirm('Da li ste sigurni da želite da obrišete sobu?')) {
      this.roomService.deleteRoom(roomId).subscribe(() => {
        this.loadRooms();
        this.showEditModal = false;
      });
    }
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}
