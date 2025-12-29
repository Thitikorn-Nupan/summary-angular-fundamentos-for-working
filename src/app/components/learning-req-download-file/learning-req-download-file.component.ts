import {Component} from '@angular/core';
import {OrderItemService} from '../../service/order-item.service';
// Library: The file-saver library provides a convenient and reliable way to handle the saving process across different browsers.
// An optional library for easier file saving
import {saveAs} from 'file-saver';
import {Subscription} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-learning-req-download-file',
  standalone: false,
  templateUrl: './learning-req-download-file.component.html',
  styleUrl: './learning-req-download-file.component.css'
})
export class LearningReqDownloadFileComponent {

  constructor(private readonly orderItemService: OrderItemService) {
  }

  protected downloadPDF(): Subscription {
    return this.orderItemService.readsReportAsPDF().subscribe((res: HttpResponse<any>): void => {
      // User Library: The file-save for download
      if (res.body && res.headers.has('File-Name')) {  // You can now access all exposed headers here
        const filename: string = res.headers.get('File-Name')!
        // console.log(filename) // Follow res filename.pdf // console.log(res.body) // Follow res Blob {size: 6197943, type: 'application/octet-stream'}
        saveAs(res.body, filename);
      }
    })
  }

  protected downloadExcel(): Subscription {
    return this.orderItemService.readsReportAsExcel().subscribe((res: HttpResponse<any>): void => {
      // Or  use native browser methods:
      if (res.body && res.headers.has('File-Name')) {
        const filename: string = res.headers.get('File-Name')!
        const blob: Blob = new Blob([res.body]);
        const downloadLink: HTMLAnchorElement = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.setAttribute('download', filename); // Set the file name
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    })
  }

  protected downloadWord(): Subscription {
    return this.orderItemService.readsReportAsWord().subscribe((res: HttpResponse<any>): void => {
      if (res.body && res.headers.has('File-Name')) {
        const filename: string = res.headers.get('File-Name')!
        saveAs(res.body, filename);
      }
    })
  }

}
