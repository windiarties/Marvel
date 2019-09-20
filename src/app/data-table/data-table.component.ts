import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { charactersService } from '../services/characters.service'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs'

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new GetCharactersSource(this.charactersService)
  displayedColumns = ['id', 'name', 'description', 'comics'];

  constructor(private charactersService: charactersService) { }

  ngOnInit() {
  }
}

export class GetCharactersSource extends DataSource<any> {

  constructor(private charactersService: charactersService) {
    super();
  }

  connect(): Observable<any> {
    return this.charactersService.getAllCharacters();
  }

  disconnect() { }
}
