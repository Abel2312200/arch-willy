import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-xlsx-downloader',
  templateUrl: './xlsx-downloader.component.html',
  styleUrls: ['./xlsx-downloader.component.scss'],
})
export class XlsxDownloaderComponent implements OnInit {
  @Input() data?: any;
  @Input() title? : string;

  now: any = new Date();

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  downloadCSV(): void {
    /* pass here the table id */
    const json = this.data;
    const filename = `${this.title}-${this.now.getDate()}/${this.now.getMonth() + 1}/${this.now.getFullYear()}-${this.now.getMilliseconds()}.xlsx`;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
  }
}
