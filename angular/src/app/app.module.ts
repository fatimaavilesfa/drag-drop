import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

//Drag&Drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';


//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';


var config = {
  apiKey: "AIzaSyAHXW6m1INR7bagnIk01tG8mKIqklYhAM0",
  authDomain: "drag-drop-3ceed.firebaseapp.com",
  databaseURL: "https://drag-drop-3ceed.firebaseio.com",
  projectId: "drag-drop-3ceed",
  storageBucket: "drag-drop-3ceed.appspot.com",
  messagingSenderId: "1026918177386"
};




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    OverlayModule,
    MatDialogModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
