import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  private _router: Subscription;

  today: number = Date.now();
  url: string;
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  currentLang = 'en';

  @ViewChild('sidemenu') sidemenu;
  @ViewChild('root') root;

  constructor(private router: Router, public menuItems: MenuItems ) {
  }

  ngOnInit(): void {
    const elemSidebar = <HTMLElement>document.querySelector('.app-inner > .sidebar-panel');
    const elemContent = <HTMLElement>document.querySelector('.app-inner > .mat-sidenav-content');

     

  }

  ngAfterViewInit() {
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    const elemSidebar = <HTMLElement>document.querySelector('.app-inner > .sidebar-panel');
    setTimeout(() => {
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar) {
      }
    }, 350);
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'side';
    }
  }
}
