import { Component, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/facades/app.facades';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss'],
})
export class ReportingComponent implements OnInit {

  report : number[] = [];

  constructor(private appFacades : AppFacades) {}

  ngOnInit(): void {
    this.getCommandReport();
  }

  getCommandReport() {
    this.appFacades.getCommandReport().subscribe(
      {
        next :(response : any)=>{
          Object.keys(response)
          this.report = Object.values(response);

        },
        error :(error)=>{
          console.log(error);
        }
      }
    );
  }
}
