import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem,  CdkDragStart, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  data: any = {
    name: "",
    title: ""
  };
  empty:any;
  icons: any = [1, 2, 3];
  items: any = [4];
  childItems: any = [5];
  // items: any = [{
  //   state : "",
  //   position : ""
  // }];


  state = "";
  position = "";
  X : number;
  Y : number;




  constructor() { }

  ngOnInit() {
    this.resetList();
  }

  private resetList() {
    this.empty = [];
    setTimeout(() => {
      this.empty = this.icons.slice();
    }, 0);
  }


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  edit() {
    console.log(this.items);
    console.log(this.data );
    console.log(this.items.position);
    console.log(this.items.X);
    console.log(this.items.Y);
  }

  reciveData($event) {
    this.data = $event;
  }

  dragStarted(event: CdkDragStart) {
    this.items.state = 'dragStarted';

  }

  dragEnded(event: CdkDragEnd) {
    this.items.state = 'dragEnded';
    console.log(event);
  }

  dragMoved(event: CdkDragMove) {
    this.items.position = ` Position X: ${event.pointerPosition.x} - Y: ${event.pointerPosition.y}`;
    this.items.X = event.pointerPosition.x;
    this.items.Y = event.pointerPosition.y;
  }

  concat() {
    if( this.items.X < this.items.Y ) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }


  addToList(event: CdkDragDrop<string[]>) {
    this.childItems.push(this.empty[event.previousIndex]);
    this.resetList();
  }



}
