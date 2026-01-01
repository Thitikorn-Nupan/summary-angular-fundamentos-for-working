import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private readonly baseUrl: string = environment.protocal+environment.base_domain_api_jasper; // 'http://localhost:8080/api/order-item'
  private readonly baseUrlSecurity: string = environment.protocal+environment.base_domain_api_jasper_security; // 'http://localhost:8080/api/order-item'

  constructor(private readonly httpClient: HttpClient) { }

  public readsReportAsPDF(): Observable<any> {
    const fileType : any = {
      fileExtension: 'PDF',
    }
    return this.httpClient.post(this.baseUrl+'/reads-report', fileType ,{
        observe: 'response', // Get the full HttpResponse
        responseType: 'blob', // Specify the response body type as a blob
    }); // Use 'blob' for binary data
  }

  public readsReportAsExcel(): Observable<any> {
    const fileType : any = {
      fileExtension: 'XLSX',
    }
    return this.httpClient.post(this.baseUrl+'/reads-report', fileType ,{
      observe: 'response', // Get the full HttpResponse
      responseType: 'blob' // Specify the response body type as a blob
    }); // Use 'blob' for binary data
  }

  public readsReportAsWord(): Observable<any> {
    const fileType : any = {
      fileExtension: 'DOC',
    }
    return this.httpClient.post(this.baseUrl+'/reads-report', fileType ,{
      observe: 'response', // Get the full HttpResponse
      responseType: 'blob' // Specify the response body type as a blob
    }); // Use 'blob' for binary data
  }

  public login(): Observable<any> {
    const loginReq : any = {
      username : 'admin',
      password:'1'
    }
    return this.httpClient.post(this.baseUrlSecurity+'/login', loginReq);
  }

  public readsReportAsPDFAuthButPermissionAll(): Observable<any> {
    const fileType : any = {
      fileExtension: 'PDF',
    }
    return this.httpClient.post(this.baseUrlSecurity+'/reads-report', fileType ,{
      observe: 'response', // Get the full HttpResponse
      responseType: 'blob', // Specify the response body type as a blob
    }); // Use 'blob' for binary data
  }

  public readsReportAsPDFAuth(token: string): Observable<any> {
    const fileType : any = {
      fileExtension: 'PDF',
    }
    const headers = {
      'Authorization': 'Bearer '+token,
    };
    return this.httpClient.post(this.baseUrlSecurity+'/auth/reads-report', fileType , {
      observe: 'response', // Get the full HttpResponse
      responseType: 'blob', // Specify the response body type as a blob
      headers
    }); // Use 'blob' for binary data
  }

  public readsReportAsExcelAuth(token: string): Observable<any> {
    const fileType : any = {
      fileExtension: 'XLSX',
    }
    const headers = {
      'Authorization': 'Bearer '+token,
    };
    return this.httpClient.post(this.baseUrlSecurity+'/auth/reads-report', fileType , {
      observe: 'response', // Get the full HttpResponse
      responseType: 'blob', // Specify the response body type as a blob
      headers
    }); // Use 'blob' for binary data
  }
}
