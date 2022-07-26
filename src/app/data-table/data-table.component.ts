import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { setAriaColCount } from 'ag-grid-community/dist/lib/utils/aria';
import { account } from 'src/app/models/account';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{

  constructor(private router:Router){}

  public gridApi:any;
  public rowSelection = 'single';
  public adddata:boolean = false;
  public user:string ="";
  public myData:any[]=[];
  public data:account[]=[];
  public modaldata:account = new account();
  public inputname:string="";
  public inputaccn:string="";
  public inputbal:string="";


  ngOnInit(): void {
      let griddata = JSON.parse(localStorage.getItem("testdata"));
      if(!!griddata && griddata.length>0)
        this.myData = griddata;
      else{
        localStorage.setItem("testdata",JSON.stringify(this.rowData));
        this.myData = this.rowData
      }
      
  }

  colDefs: ColDef[] = [
    {field:'Name'},
    {field:'AccountNumber'},
    {field:'Balance'}
  ];
defaultColDef: ColDef={
  sortable:true,filter:true
}

  rowData: any[] = [
    { Name:'XYZ',AccountNumber: '385676544',Balance:'6756765'},
    { Name:'XYZ',AccountNumber: '385676544',Balance:'6756765'}
  ];
  onBtnClick(){
    this.router.navigate([]).then(result => { window.open("home-page/" , "_blank"); });
  }
  add(){
    // console.log("added");
    this.adddata=true;
  }
  delete(){
    // console.log("delete");
    var data = JSON.parse(localStorage.getItem("testdata"));
    data= data.filter((el: { Name: string; }) => {
      return el.Name !== this.user;
    });
    localStorage.setItem("testdata",JSON.stringify(data));
    window.location.reload();
  }
  save(){
    // console.log("save");
    this.modaldata.Name = this.inputname;
    this.modaldata.AccountNumber = this.inputaccn;
    this.modaldata.Balance = this.inputbal;
    this.data = JSON.parse(localStorage.getItem("testdata"));
    this.data.push(this.modaldata);
    localStorage.setItem("testdata",JSON.stringify(this.data));
    window.location.reload();
  }

  close(){
    this.adddata=false;
  }
  
  onGridReady(params:any){
    this.gridApi = params.api;
  }
  onSelectionChanged(event:any){
    const selectedRows = this.gridApi.getSelectedRows();
    this.user = selectedRows.length === 1 ? selectedRows[0].Name :'';
  }
  
  
  
  









//   bsModalRef?: BsModalRef;
//   constructor(private modalService: BsModalService) {}
 
//   openModalWithComponent() {
//     const initialState: ModalOptions = {
//       initialState: {
//         list: [
//           'Open a modal with component',
//           'Pass your data',
//           'Do something else',
//           '...'
//         ],
//         title: 'Modal with component'
//       }
//     };
//     this.bsModalRef = this.modalService.show(ModalContentComponent, initialState);
//     this.bsModalRef.content.closeBtnName = 'Close';
//   }
// }

// @Component({
//   // eslint-disable-next-line @angular-eslint/component-selector
//   selector: 'modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title pull-left">{{title}}</h4>
//       <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
//         <span aria-hidden="true" class="visually-hidden">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <ul *ngIf="list.length">
//         <li *ngFor="let item of list">{{item}}</li>
//       </ul>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
//     </div>
//   `
// })
 
// export class ModalContentComponent implements OnInit {
//   title?: string;
//   closeBtnName?: string;
//   list: any[] = [];
 
//   constructor(public bsModalRef: BsModalRef) {}
 
//   ngOnInit() {
//     this.list.push('PROFIT!!!');
//   }
}
