import {Component, OnInit} from '@angular/core';
import {FakeDataService} from '../../service/fake-data';

interface File {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-learning-ng-container-tag',
  standalone: false,
  templateUrl: './learning-ng-container-tag.component.html',
  styleUrl: './learning-ng-container-tag.component.css'
})
export class LearningNgContainerTagComponent implements OnInit {

  protected template?: string;
  protected switchTemplate : boolean = true
  protected isLoggedInOnTemplate: boolean = false;
  protected subTitleTemplate?: string;

  protected months : string[]
  private fakeDataService:FakeDataService
  protected files: File[]
  protected active: boolean = false;

  constructor() {
    this.fakeDataService = new FakeDataService();
    this.months = this.fakeDataService.retrieveAllMonths
    this.files = this.fakeDataService.retrieveAllFiles
  }

  ngOnInit(): void {

  }

  protected listenTemplate() {
    this.switchTemplate = !this.switchTemplate;
    // console.log(this.switchTemplate);
  }

  protected getServerity() {
    return this.active ? 'success' : 'warn';
  }

  protected switchActivity() {
    this.active = !this.active;
    console.log(this.active);
  }
}
