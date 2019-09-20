import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { MatPaginator, MatSort } from '@angular/material';

@Injectable()
export class charactersService {
  private url = `https://gateway.marvel.com:443/v1/public/characters?apikey=9aa74233e47b83d2cd8671bff2d92a67&ts=1&hash=f00c29f068d42b5f394296060dbcc291`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {

    // const dataMutations = [
    //   observableOf((data: any) => data.data.results),
    //   this.paginator.page,
    //   this.sort.sortChange
    // ];
    // this.paginator.length = this.data.length;

    return this.http.get<any>(this.url)
      .pipe(map((data: any) => data.data.results))
    // return merge(...dataMutations).pipe(map((data: any) => data.data.results)) => {
    //   return this.getPagedData(this.getSortedData([...this.data]));
    // }));
  }



}