import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';



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

  icons: any = [1, 2, 3];
  items: any = [4];



  constructor() { }

  ngOnInit() {
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

  edit(){
    console.log(this.items);
    console.log(this.data );
    console.log(this.data.name);
    console.log(this.data.title);
  }

  reciveData($event) {
    this.data = $event;
  }

}
