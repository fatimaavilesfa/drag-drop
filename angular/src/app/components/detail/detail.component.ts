import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() data: {};
  @Output() dataChange = new EventEmitter<any>();

  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   title: new FormControl('')
  // });

  showSelected: boolean = true;

  isSingleClick: boolean;

  constructor() {

  }

  ngOnInit() {
  }


  show() {
    this.showSelected = true;
  }

  hide() {
    this.showSelected = false;
  }

  // sendData() {
  //   this.dataEvent.emit(this.profileForm.value);
  //   console.log(this.profileForm.value);
  // }





}
