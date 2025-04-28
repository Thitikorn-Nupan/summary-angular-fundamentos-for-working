import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Todo} from '../models/api/todo';
import {Post} from '../models/api/post';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  private readonly URLS_TESTING = [
     environment.protocal+environment.domain_and_path_todo , // https://dummy-json.mock.beeceptor.com/todos
     environment.protocal+environment.domain_and_path_post , // https://dummy-json.mock.beeceptor.com/post
  ]


  public declare todoObserve: Observable<Todo[]>
  public declare postObserve: Observable<Post[]>


  constructor(private http: HttpClient) {
    // ** required *** remember initial observable then request http
    this.todoObserve = new Observable((observe) => {
      this.http.get(this.URLS_TESTING[0]).subscribe((response: any) => {
        observe.next(response)
      })
    })


    this.postObserve = new Observable((observe) => {
      this.http.get(this.URLS_TESTING[1]).subscribe((response: any) => {
        observe.next(response)
      })
    })

  }



}
