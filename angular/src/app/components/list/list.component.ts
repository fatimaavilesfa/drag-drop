import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatList } from '@angular/material';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem,  CdkDragStart, CdkDragEnd, CdkDragMove, copyArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild(MatList, { read: ElementRef }) child: ElementRef;

  data: any = {
    name: "",
    title: ""
  };

  empty:any;

  icons: any = [1, 2, 3];

  items: any = [4];

  childItems: any = [5];

  _currentField;

  _currentIndex;

  ngOnInit() {

  }

  dragStart(event: CdkDragStart) {
    this._currentIndex = this.icons.indexOf(event.source.data); // Get index of dragged type
    this._currentField = this.child.nativeElement.children[this._currentIndex]; // Store HTML field
  }

  moved(event: CdkDragMove) {
    // Check if stored HTML field is as same as current field
    if (this.child.nativeElement.children[this._currentIndex] !== this._currentField) {
      // Replace current field, basically replaces placeholder with old HTML content
      this.child.nativeElement.replaceChild(this._currentField, this.child.nativeElement.children[this._currentIndex]);
    }
  }

  itemDropped(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.icons, event.previousIndex, event.currentIndex);
    } else {
      this.addField(event.item.data, event.currentIndex);
    }
  }

  addField(fieldType: any, index: number) {
    this.childItems.splice(index, 0, fieldType);
  }

  // constructor() { }


  // on init  this.resetList();
  // private resetList() {
  //   this.empty = [];
  //   setTimeout(() => {
  //     this.empty = this.icons.slice();
  //   }, 0);
  // }


  // drop(event: CdkDragDrop<any>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }



  // addToList(event: CdkDragDrop<string[]>) {
  //   this.childItems.push(this.empty[event.previousIndex]);
  //   this.resetList();
  // }



  edit() {
    console.log(this.items);
    console.log(this.data );
  }

  reciveData($event) {
    this.data = $event;
  }


}
