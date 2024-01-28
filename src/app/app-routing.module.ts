import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukeComponent } from './preporuke/preporuke.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AddRoomComponent } from './add-room/add-room.component';

const routes: Routes = [
  { path: 'ponuda', component: PonudaComponent },
  { path: 'preporuke', component: PreporukeComponent },
  { path: 'o-nama', component: ONamaComponent },
  { path: 'lista', component: RoomListComponent },
  { path: 'add-room', component: AddRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }