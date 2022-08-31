import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-page-size',
  templateUrl: './dropdown-page-size.component.html',
  styleUrls: ['./dropdown-page-size.component.css']
})
export class DropdownPageSizeComponent implements OnInit {

  @Output() onChanged = new EventEmitter<number>();
  change(pageSize:number) {
    this.onChanged.emit(pageSize);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
