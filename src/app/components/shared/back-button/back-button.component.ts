import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

 @Input() direction?:string ;
 @Input() text?:string;
 @Input() color?:string;
 @Input() type?:string;

  constructor(private location : Location) { }

  ngOnInit(): void {
  }

  navigate(){
    if(this.direction == "forward")
     return this.location.forward();
    return this.location.back();
  }
}
