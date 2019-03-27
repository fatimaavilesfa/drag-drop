import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() dataChange = new EventEmitter<any>();

  @Output() formChange = new EventEmitter<any>();

  @Output() sendToList = new EventEmitter<any>();

  @Input() data: {};

  @Input() get dataValue() {
    return this.dataForm;
  }

  set dataValue(val) {
    this.dataForm = val;
    this.dataChange.emit(this.dataForm);
   }


  dataForm = {
    title: '',
    value: '',
    extra: ''
  };

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

  sendData(title:string, value:string, extra:string){
    this.sendToList.emit({title:title, value:value, extra:extra});
  }

}
