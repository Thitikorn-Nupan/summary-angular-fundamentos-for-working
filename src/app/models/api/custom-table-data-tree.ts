import {TreeNode} from 'primeng/api';



export class CustomTableDataTreeUser<T> implements TreeNode {

  public data : T;
  public children : TreeNode<T>[];

  constructor(data: T, children: TreeNode<T>[]) {
    this.data = data;
    this.children = children;
  }

}
