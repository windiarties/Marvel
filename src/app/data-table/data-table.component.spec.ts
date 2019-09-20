
// import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// import { DataTableComponent } from './data-table.component';

// describe('DataTableComponent', () => {
//   let component: DataTableComponent;
//   let fixture: ComponentFixture<DataTableComponent>;

//   beforeEach(fakeAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DataTableComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DataTableComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should compile', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';

describe('UsertableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
