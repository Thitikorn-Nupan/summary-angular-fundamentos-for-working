import {Component, OnInit} from '@angular/core';
import {UserServiceData} from '../../../service/user-service-data';
import {HeaderCol} from '../../../models/api/header-col';
import {MessageService, TreeNode} from 'primeng/api';
import {CustomTableDataTree} from '../../../models/api/custom-table-data-tree';
import {DynamicField} from '../../../models/form/dynamic-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/api/user';

@Component({
  selector: 'crud-user',
  standalone: false,
  templateUrl: './crud-user.component.html',
  styleUrl: './crud-user.component.css'
})
export class CrudUserComponent implements OnInit{
  // edit form
  protected declare userFormGroupEditNumberFields: DynamicField
  protected declare userFormGroupEditTextFields: DynamicField
  protected declare userFormGroupEditTextEmailFields: DynamicField
  // table
  public declare header: HeaderCol[]
  public declare  data: TreeNode[]

  private userServiceData : UserServiceData;

  // add form
  protected userFormGroupNumberFields: DynamicField[] = [
    new DynamicField('uid',new FormControl('',Validators.required),'uid-id','UID','User ID...'),
  ]
  protected userFormGroupTextFields: DynamicField[] = [
    new DynamicField('fullname',new FormControl('',Validators.required),'id-fullname','pi pi-pencil','Fullname...'),
  ]
  protected userFormGroupTextEmailFields: DynamicField[] = [
    new DynamicField('email',new FormControl('',Validators.required),'id-email','pi pi-at','Email...'),
  ]



  protected resultUserFormGroup : string = ''
  protected isValidFormGroup: boolean = false
  protected enableEditFormGroup: boolean = false

  constructor(private messageService : MessageService) {
    this.userServiceData = new UserServiceData()
  }

  ngOnInit(): void {
    this.reloadData()
    this.header = this.getHeaderUserTreeTable()
  }


  private setUserFormGroupEditFields(uid : number,fullname : string,email : string) {
    this.userFormGroupEditNumberFields = new DynamicField('uid',new FormControl(uid,Validators.required),'uid-edit-id','UID','User ID...')
    this.userFormGroupEditTextFields =  new DynamicField('fullname',new FormControl(fullname,Validators.required),'fullname-edit-id','pi pi-pencil','Fullname...')
    this.userFormGroupEditTextEmailFields= new DynamicField('email',new FormControl(email,Validators.required),'email-edit-id','pi pi-at','Email...')
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
      this.messageService.add({ severity: 'success', summary: 'User Form Update' , detail: 'Valid inputs' });
      let user = new User(formGroup.value.uid,formGroup.value.fullname,formGroup.value.email)
      this.userServiceData.editUser(user,user.uid)
      this.reloadData()
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
    this.enableEditFormGroup = true
    this.setUserFormGroupEditFields(rowData.uid,rowData.fullname,rowData.email)
  }

  private reloadData () {
    this.data = this.convertObjectToDataTreeTable(this.userServiceData.getUsers());
  }
}
