import {Component, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormC2Component} from './form-c2/form-c2.component';

interface Order {
  name: string;
  price: number;
}

interface Problem {
  id: number;
  name: string;
  cost: number;
}


@Component({
  selector: 'app-learning-form-groups-and-binding-attributes',
  standalone: false,
  templateUrl: './learning-form-groups-and-binding-attributes.component.html',
  styleUrl: './learning-form-groups-and-binding-attributes.component.css'
})
export class LearningFormGroupsAndBindingAttributesComponent {

  /*@ViewChild(FormC2Component)
  protected formC2Component! : FormC2Component;*/

  private orders: Order[] = [
    {name: 'Stir-fried basil and pork', price: 300},
    {name: 'Fried rice', price: 250},
    {name: 'Spicy shrimp soup', price: 350},
    {name: 'Chicken in coconut soup', price: 280},
    {name: 'Red curry', price: 290},
  ]

  private problems: Problem[] = [
    {id:100012341, name: 'Concrete work', cost: 1500 },
    {id:200012341, name: 'Electrical work', cost: 1500 },
    {id:300012341, name: 'Metal work', cost: 1500 }
  ]

  // for form a2
  protected loginFormDynamic = {
    formTitle: 'Login Form',
    field1: {
      fieldName: 'username',
      fieldData: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      fieldLabel: 'Username : ',
      fieldId: 'username',
    },
    field2: {
      fieldName: 'password',
      fieldData: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      fieldLabel: 'Password : ',
      fieldId: 'password',
    }
  }
  protected studentFormDynamic = {
    formTitle: 'Student Form',
    field1: {
      fieldName: 'fullname',
      fieldData: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      fieldLabel: 'Fullname : ',
      fieldId: 'fullname',
    },
    field2: {
      fieldName: 'address',
      fieldData: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      fieldLabel: 'Address : ',
      fieldId: 'address',
    }
  }

  // for form b2
  protected orderFormDynamic = {
    formTitle: 'Order Form',
    data: this.orders,
    field1: {
      fieldName:'phoneNumber',
      fieldLabel:'Your Phone Number',
      fieldId:'phoneNumber',
      fieldData:new FormControl('',[Validators.required])
    },
    field2: {
      fieldName: 'order',
      fieldData: new FormControl('', [Validators.required]),
      fieldLabel: 'Select order',
      fieldId: 'order-id',
    },
  }
  protected serviceFormDynamic = {
    formTitle: 'Service Form',
    data: this.problems,
    field1: {
      fieldName:'phoneNumber',
      fieldLabel:'Your Phone Number',
      fieldId:'phoneNumber',
      fieldData:new FormControl('',[Validators.required])
    },
    field2: {
      fieldName: 'Problem',
      fieldData: new FormControl('', [Validators.required]),
      fieldLabel: 'Select problem',
      fieldId: 'problem-id',
    },
  }



  protected departmentProgrammingFormDynamic = {
    formTitle: 'Department Programming',
    enableInputSalary: true,
    enableInputAddress:true,
    field1: {
      name : 'fullname',
      data : new FormControl('',[Validators.required]),
      id : 'fullname-id-field1',
      icon : 'pi pi-user',
      placeHolder : 'Fullname...'
    },
    field2: {
      name : 'email',
      data : new FormControl('',[Validators.required]),
      id : 'email-id-field2',
      icon : 'pi pi-at',
      placeHolder : 'Email Company...'
    }
    ,
    field3: {
      name : 'salary',
      data : new FormControl('',[Validators.required]),
      id : 'salary-id-field3',
      icon : '฿',
      placeHolder : 'Expect Salary'
    }
    ,
    field4: {
      name : 'address',
      data : new FormControl('',[Validators.required]),
      id : 'address-id-field4',
      icon : 'pi pi-pencil',
      placeHolder : 'Address...'
    }
  }

  protected departmentSaleFormDynamic = {
    formTitle: 'Department Sale',
    enableInputSalary: true,
    enableInputAddress:true,
    field1: {
      name : 'nickname',
      data : new FormControl('',[Validators.required]),
      id : 'nickname-id-field1',
      icon : 'pi pi-user',
      placeHolder : 'Nickname...'
    },
    field2: {
      name : 'email',
      data : new FormControl('',[Validators.required]),
      id : 'email-sale-id-field2',
      icon : 'pi pi-at',
      placeHolder : 'Email...'
    }
    ,
    field3: {
      name : 'salary',
      data : new FormControl('',[Validators.required]),
      id : 'salary-sale-id-field3',
      icon : '฿',
      placeHolder : 'Expect Salary'
    }
    ,
    field4: {
      name : 'comment',
      data : new FormControl('',[Validators.required]),
      id : 'comment-id-field4',
      icon : 'pi pi-pencil',
      placeHolder : 'Comment...'
    }
  }


  protected departmentUserFormDynamic = {
    formTitle: 'User Recommendation',
    enableInputSalary: false,
    enableInputAddress:true,
    field1: {
      name : 'nickname',
      data : new FormControl('',[Validators.required]),
      id : 'nickname-user-id-field1',
      icon : 'pi pi-user',
      placeHolder : 'Nickname...'
    },
    field2: {
      name : 'email',
      data : new FormControl('',[Validators.required]),
      id : 'email-user-id-field2',
      icon : 'pi pi-at',
      placeHolder : 'Email...'
    }
    ,
    field3: {
      name : 'salary',
      data : new FormControl('',[]),
      id : 'salary-sale-id-field3',
      icon : '฿',
      placeHolder : 'Expect Salary'
    }
    ,
    field4: {
      name : 'comment',
      data : new FormControl('',[]),
      id : 'comment-user-id-field4',
      icon : 'pi pi-pencil',
      placeHolder : 'Comment...'
    }
  }


  // this function mapped void function in child component
  commonField4(id :string) {
    return {
      name : 'message',
      data : new FormControl('',[]),
      id : id,
      icon : 'pi pi-pencil',
      placeHolder : 'Leave the message...'
    };
  }

}
