import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() images ?: string;
  default?: string;

  constructor() {}

  ngOnInit(): void {
    this.default = this.images;
  }

  setImage(index: string) {

  }
}
