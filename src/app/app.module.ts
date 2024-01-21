import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PreporukeComponent } from './preporuke/preporuke.component';
import { PonudaComponent } from './ponuda/ponuda.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRoomComponent,
    RoomListComponent,
    ONamaComponent,
    PreporukeComponent,
    PonudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
