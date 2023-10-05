import { animate, transition } from '@angular/animations';
import { ChangeDetectionStrategy, OnDestroy, ViewEncapsulation } from '@angular/core';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ModalService } from 'src/app/services/modals/jw-modal';

@Component({
  selector: 'app-jw-modal',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class OrderFormComponent implements OnInit  {
  @Input() id?: string;
  @Input() size = 90;
  @Input() heigth?:number;
  @ViewChild('modal', { static: false }) modal?: ElementRef;
  private element: any;

  constructor(
    public el: ElementRef,
    private modalService: ModalService,
    private render: Renderer2
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    transition('open => closed', [animate('1s')]);

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    transition('closed => open', [animate('0.5s')]),
      this.modalService.remove(this.id as string);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

  ngAfterViewInit(): void {
    this.render.setStyle(this.modal?.nativeElement, 'width', `${this.size}%`);
    this.render.setStyle(this.modal?.nativeElement, 'height', `${!!this.heigth ? this.heigth+'%' : 'auto'}`);
  }
}


