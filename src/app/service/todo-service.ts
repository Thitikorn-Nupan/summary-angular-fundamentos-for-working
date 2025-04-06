import {Observable} from 'rxjs';
import {Todo} from '../models/api/todo';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

// if this service have dependent service that inject ** don't forget this annotation @Injectable
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosObservable : Observable<Todo[]>;

  private readonly URLS_TESTING = [
    environment.protocal+environment.domain_and_path_todo , // https://dummy-json.mock.beeceptor.com/todos
    environment.protocal+environment.domain_and_path_post , // https://dummy-json.mock.beeceptor.com/post
  ]

  constructor(private http: HttpClient) {
    this.todosObservable = new Observable<Todo[]>( (observe) => {
      this.http.get(this.URLS_TESTING[0]).subscribe((response: any) => observe.next(response))
    })
  }

  public getTodosObservable() {
    return this.todosObservable
  }
}
