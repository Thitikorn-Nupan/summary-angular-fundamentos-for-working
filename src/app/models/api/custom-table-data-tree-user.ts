import {TreeNode} from 'primeng/api';

export class User {
  public firstname?: string
  public age?: number
}

export class CustomTableDataTreeUser implements TreeNode {

  public data : User;
  public children : TreeNode<User>[];

  constructor(data: User, children: TreeNode<User>[]) {
    this.data = data;
    this.children = children;
  }
}
