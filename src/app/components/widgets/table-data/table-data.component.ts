import { IMarque } from 'src/app/core/interface';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFacades } from 'src/app/facades/app.facades';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataComponent implements OnInit {
  @Input() headers!: string[];
  @Input() datas: any[] = [];
  @Input() buttons: string[] = ['modifier', 'supprimer'];
  @Input() type: string = 'command';
  @Input() filter: boolean = true;
  @Output() updateEvent = new EventEmitter<boolean>();

  category: string = '';
  marques: Omit<IMarque, 'id' | 'isActive'>[] = [];
  p : number = 1;

  constructor(private appFacades: AppFacades) {}

  ngOnInit(): void {
    this.getMarques();
  }

  getCategorie(event: string) {
    this.category = event;
  }

  createControl(value: number | string) {
    return new FormControl(value == '1' || value == 1 ? true : false);
  }

  changeUserStatus(isActive : number ,guid : string){
    this.appFacades.updateUserStatus({isActive : isActive == 1 ? 0  : 1 , guid }).subscribe((response : any)=>{
      console.log(response);
      this.updateEvent.emit(true);
    },(error)=> {
      console.log(error);
    })
  }

  getMarques() {
    this.appFacades.getMarques().subscribe((response: any) => {
      response.data.forEach((element: any) => this.marques.push(element.name));
      console.log(this.marques);
    });
  }

  deleteUser(guid  : string){
    console.log(guid);
    this.appFacades.deleteUser(guid).subscribe((response : any)=>{
      console.log(response);
      this.updateEvent.emit(true);
    },(error)=> {
      console.log(error);
    })
  }

  delete(guid: string) {
    this.appFacades.deleteProduct(guid).subscribe({
      next: (response: any) => {
        this.appFacades.alertSuccess(response.message);
        this.updateEvent.emit(true);
      },
      error: (err: any) => {
        this.appFacades.alertError(err.message);
        console.log(err);
      },
      complete: () => {},
    });
  }
}
