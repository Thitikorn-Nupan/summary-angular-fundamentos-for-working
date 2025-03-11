import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../models/form/todo';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  private readonly URLS_TESTING = [
    "https://dummy-json.mock.beeceptor.com/todos"
  ]

  public declare todoObserve: Observable<Todo[]>

  constructor(private http: HttpClient) {
    // ** required *** remember initial observable then request http
    this.todoObserve = new Observable((observe) => {
      this.http.get(this.URLS_TESTING[0]).subscribe((response: any) => {
        observe.next(response)
      })
    })
  }

}
