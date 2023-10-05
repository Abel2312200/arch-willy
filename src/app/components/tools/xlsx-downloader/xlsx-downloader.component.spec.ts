import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxDownloaderComponent } from './xlsx-downloader.component';

describe('XlsxDownloaderComponent', () => {
  let component: XlsxDownloaderComponent;
  let fixture: ComponentFixture<XlsxDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XlsxDownloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XlsxDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
