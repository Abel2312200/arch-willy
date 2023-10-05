import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardComponent } from './shopping-item.component';

describe('ShoppingItemComponent', () => {
  let component: ShoppingCardComponent;
  let fixture: ComponentFixture<ShoppingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
