import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  profileForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
  });

  showSelected: boolean = true;

  constructor() {
  }

  show() {
    this.showSelected = true;
  }

  hide() {
    this.showSelected = false;
  }

  ngOnInit() {
  }



  @Output() dataEvent = new EventEmitter<any>();

  sendData() {
    this.dataEvent.emit(this.profileForm.value);
    console.log(this.profileForm.value);
  }



}
