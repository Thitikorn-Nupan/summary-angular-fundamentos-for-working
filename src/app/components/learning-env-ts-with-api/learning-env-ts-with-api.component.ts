import {Component, OnInit} from '@angular/core';
import {FakeApiForEnvService} from '../../service/fake-api-for-env.service';
import {Todo} from '../../models/api/todo';
import {Post} from '../../models/api/post';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-learning-env-ts-with-api',
  standalone: false,
  templateUrl: './learning-env-ts-with-api.component.html',
  styleUrl: './learning-env-ts-with-api.component.css'
})
export class LearningEnvTsWithApiComponent implements OnInit {

  protected declare data : Todo[] | Post[] | null
  protected declare nodes: TreeNode[];
  constructor(private fakeApiForEnv: FakeApiForEnvService) {}

  ngOnInit(): void {
    this.fakeApiForEnv.getObserve().subscribe((data : any) => {
      this.data = data
      // this.nodes.push({children : this.getChildrenNodes(data)})
      this.nodes = [
        {
          key: '0',
          label: 'Dynamic Data ',
          icon : 'pi pi-folder',
          styleClass : "",
          leaf: true,
          children : this.getChildrenNodes(data),
        }
      ]
    })
  }

  private getChildrenNodes (data : any) : {key : string, label : string,type:string} [] {
    let childrenValue = [];
    for (let i = 0; i < data!.length; i++) {
      childrenValue.push({key : data![i].id+'' , label: JSON.stringify(this.data![i])+'' , type:'string' })
    }
    return childrenValue;
  }

}
