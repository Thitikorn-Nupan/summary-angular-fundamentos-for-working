import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Todo} from '../models/api/todo';
import {Post} from '../models/api/post';

@Injectable({
  providedIn: 'root'
})
export class FakeApiForEnvService {

  // it's dynamic
  private readonly URL_TESTING = environment.protocal+environment.domain_and_path // https://dummy-json.mock.beeceptor.com/todos
  private declare readonly todoObserve: Observable<Todo[]>
  private declare readonly postObserve: Observable<Post[]>

  constructor(private http: HttpClient) {
    if (this.URL_TESTING.match('todos')) {
      // console.log('run env on dev : ',this.URL_TESTING)
      this.todoObserve = new Observable((observe) => {
        this.http.get(this.URL_TESTING).subscribe((response: any) => {
          observe.next(response)
        })
      })
    }
    else if (this.URL_TESTING.match('posts')) {
      // console.log('run env on qa : ',this.URL_TESTING)
      this.postObserve = new Observable((observe) => {
        this.http.get(this.URL_TESTING).subscribe((response: any) => {
          observe.next(response)
        })
      })
    }
  }


  public getObserve() :any {
    if (this.todoObserve !== undefined ) {
      return this.todoObserve
    }
    return this.postObserve
  }

}
