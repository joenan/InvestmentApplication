import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public displayedColumns = ['select', 'creditAccountNo', 'creditAccountName', 'ToBank', 'TransDate', 'DebitAcctNo', 'DebitAccountName', 'FromBank', 'Amount', 'TransRefNo', 'details', 'reject', 'proceed'];

  // dataSource: any = new MatTableDataSource<any>();
  reviewList: any = [];

  public dataSource = new MatTableDataSource<any>();
  selection: any = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  blob: Blob;

  constructor(private service: ApiService, private router: Router, private toastr: ToastrService) {
    // this.getDemoReviewList();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



}
