import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <app-ng-switch></app-ng-switch>

    <p>Hola mundo desde app.component</p>
  `,
  styles: [
  ]
})
// tslint:disable-next-line: max-line-length
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  // tslint:disable-next-line: typedef
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  // tslint:disable-next-line: typedef
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  // tslint:disable-next-line: typedef
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  // tslint:disable-next-line: typedef
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  // tslint:disable-next-line: typedef
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  // tslint:disable-next-line: typedef
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  // tslint:disable-next-line: typedef
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
