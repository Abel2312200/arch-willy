import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';

export type history  = Required<{action : string , libelle : string , date : any }>;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history : history[] = [];
  constructor(private appFacades  : AppFacades) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.appFacades.getHistory().subscribe((response)=>{
      this.history = response as history[];
    });
  }

}
