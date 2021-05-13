import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SwApiService } from 'src/app/services/sw.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  displayedColumns: string[] = ['name', 'birth_year', 'gender', 'mass', 'hair_color'];
  dataSource = new MatTableDataSource();
  error: any;

  constructor(private swService: SwApiService) { }

  ngOnInit(): void {
    this.getter();
  }

  // tslint:disable-next-line:typedef
  getter() {
    this.swService.getPersonagens().subscribe(
      (data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.results);
      }, error => {
        this.error = error;
        console.error('Erro: ', error);
      });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export class TableFilteringExample { }
export class PaginatorOverviewExample { }
