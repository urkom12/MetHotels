import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PreporukeComponent } from './preporuke/preporuke.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRoomComponent,
    ONamaComponent,
    PreporukeComponent,
    PonudaComponent,
    RoomListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
