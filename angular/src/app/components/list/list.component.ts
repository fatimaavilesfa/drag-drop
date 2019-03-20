import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatList } from '@angular/material';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem,  CdkDragStart, CdkDragMove, copyArrayItem } from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild(MatList, { read: ElementRef }) child: ElementRef;

  @Output() dataEmitter = new EventEmitter<any>();

  data: any = {
    name: "",
    title: ""
  };


  icons: any = [1, 2, 3, 4];

  items: any = [5];

  childItems: any = [6];

  _currentField;

  _currentIndex;

  isSingleClick: Boolean = true;

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
      moveItemInArray(this.childItems, event.previousIndex, event.currentIndex);
    } else {
      this.addField(event.item.data, event.currentIndex);
    }
  }

  addField(fieldType: any, index: number ) {
      this.childItems.splice(index, 0, fieldType);
  }


  drop(event: CdkDragDrop<any>) {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
  }


  reciveData($event) {
    this.data = $event;
     console.log(this.data);
  }

  singleClick() {
    this.isSingleClick = true;
    setTimeout(() => {
        if(this.isSingleClick) {
          console.log('single Click', this.data.name);
        }
      },200)
  }

  doubleClick() {
    this.isSingleClick = false;
    console.log('double click');
    this.dataEmitter = this.data;
    console.log(this.dataEmitter);
  }



}
