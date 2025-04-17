import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderCol} from '../../../models/api/header-col';
import {MessageService, TreeNode} from 'primeng/api';
import {UserServiceData} from '../../../service/user-service-data';
import {CustomTableDataTree} from '../../../models/api/custom-table-data-tree';
import {User} from '../../../models/api/user';
import {DynamicField} from '../../../models/form/dynamic-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  DynamicFormGroupWithKeyFilterComponent
} from '../../dom-components/dynamic-form-group-with-key-filter/dynamic-form-group-with-key-filter.component';

@Component({
  selector: 'crud-user-with-key-filter',
  standalone: false,
  templateUrl: './crud-user-with-key-filter.component.html',
  styleUrl: './crud-user-with-key-filter.component.css'
})
export class CrudUserWithKeyFilterComponent implements OnInit {

  @ViewChild(DynamicFormGroupWithKeyFilterComponent, {static: false})
  public declare dynamicFormGroupWithKeyFilterComponent: DynamicFormGroupWithKeyFilterComponent;
  public formGroup : FormGroup
  public formGroupUpdate : FormGroup
  // table
  public declare header: HeaderCol[]
  public declare  data: TreeNode[]
  protected declare dynamicFields : DynamicField[]
  protected declare dynamicFieldsUpdate : DynamicField[]
  private userServiceData : UserServiceData;
  protected isValidFormGroup: boolean = false;
  protected enableUpdateFormGroup: boolean = false;

  constructor(private messageService : MessageService) {
    this.userServiceData = new UserServiceData()
    this.formGroup = new FormGroup({})
    this.formGroupUpdate = new FormGroup({})
  }

  ngOnInit(): void {
    this.dynamicFields = [
      new DynamicField('uid',new FormControl(0,Validators.required),'uid-id','UID','Put your user id...').setPkeyFilter('int'),
      new DynamicField('fullname',new FormControl('',Validators.required),'fullname-id','Fullname','Put your fullname...').setPkeyFilter(null),
      new DynamicField('email',new FormControl('',Validators.required),'email-id','Email','Put your email...').setPkeyFilter('email'), // anything
    ]
    this.reloadData()
    this.header = this.getHeaderUserTreeTable()
  }

  private reloadData () {
    this.data = this.convertObjectToDataTreeTable(this.userServiceData.getUsers());
  }


  protected handleFormGroupCreate(formGroup: FormGroup) {
    this.isValidFormGroup = formGroup.valid
    if (formGroup.valid) {
      this.messageService.add({ severity: 'success', summary: 'User Form Create' , detail: 'Valid inputs' });
      let user = new User(formGroup.value.uid,formGroup.value.fullname,formGroup.value.email)
      this.userServiceData.addUser(user)
      this.reloadData()
    }
  }

  protected handleFormGroupUpdate(formGroup: FormGroup) {
    this.isValidFormGroup = formGroup.valid
    if (formGroup.valid) {
      console.log(formGroup.value)
      this.messageService.add({ severity: 'success', summary: 'User Form Update' , detail: 'Valid inputs' });
      let user = new User(formGroup.value['uid-update'],formGroup.value['fullname-update'],formGroup.value['email-update'])
      console.log(user)
      this.userServiceData.editUser(user,user.uid)
      this.reloadData()
      // this.enableUpdateFormGroup = false;
    }
  }


  private getHeaderUserTreeTable() {
    let userCols: HeaderCol[] = []
    userCols.push({field: "uid", header: "UID"})
    userCols.push({field: "fullname", header: "Fullname"})
    userCols.push({field: "email", header: "Email"})
    userCols.push({field: "action", header: "Action"})
    return userCols
  }

  private convertObjectToDataTreeTable(data: any) {
    let customTableDataTree: CustomTableDataTree<any>[] = []
    for (let i = 0; i < data.length; i++) {
      customTableDataTree.push({data: data[i], children: []})
    }
    return customTableDataTree
  }

  protected setUserRowDataDelete(rowData: any) {
    const userSearch = new User(rowData.uid, '', '')
    this.userServiceData.removeUser(userSearch)
    this.reloadData()
  }

  protected setUserRowDataUpdate(rowData: any) {
    // console.log('clicked ')
    this.enableUpdateFormGroup = true
    this.formGroupUpdate = new FormGroup({}) // have to create new instance
    this.dynamicFieldsUpdate = [
      new DynamicField('uid-update',new FormControl(rowData.uid,Validators.required),'uid-update-id','UID','Put your user id...').setPkeyFilter('int'),
      new DynamicField('fullname-update',new FormControl(rowData.fullname,Validators.required),'fullname-update-id','Fullname','Put your fullname...').setPkeyFilter(null),
      new DynamicField('email-update',new FormControl(rowData.email,Validators.required),'email-update-id','Email','Put your email...').setPkeyFilter('email'), // anything
    ]
    this.dynamicFormGroupWithKeyFilterComponent?.reloadFormGroup(this.dynamicFieldsUpdate,this.formGroupUpdate)
  }
}
