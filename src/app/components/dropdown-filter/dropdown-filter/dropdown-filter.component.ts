import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFilterModel } from 'src/app/models/IFilterModel';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css']
})
export class DropdownFilterComponent implements OnInit {

  model!: IFilterModel;

  @Output() onChangedFilter = new EventEmitter<IFilterModel>();

  changeModel() {
    this.onChangedFilter.emit(this.model);
  }

  constructor() { }

  ngOnInit(): void {
    this.model = {lastName: '', order: ''};
  }

}
