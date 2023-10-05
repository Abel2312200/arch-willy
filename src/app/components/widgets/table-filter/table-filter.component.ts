import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  changeDetection  : ChangeDetectionStrategy.OnPush
})
export class TableFilterComponent implements OnInit {

  @Input()  filterData !: any[];
  @Output() choosedCategorie :  EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.filterData);
  }

  getChoosedCategorie(event : any) {
    this.choosedCategorie.emit(event.target.value);
  }

}
