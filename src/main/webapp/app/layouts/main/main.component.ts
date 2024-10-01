import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AccountService } from 'app/core/auth/account.service';
import { AppPageTitleStrategy } from 'app/app-page-title-strategy';
import FooterComponent from '../footer/footer.component';
import PageRibbonComponent from '../profiles/page-ribbon.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import NavbarComponent from '../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'jhi-main',
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
  imports: [RouterOutlet, FooterComponent, PageRibbonComponent, SidebarComponent, NavbarComponent],
})
export default class MainComponent implements OnInit, AfterViewInit {
  private router = inject(Router);
  private appPageTitleStrategy = inject(AppPageTitleStrategy);
  private accountService = inject(AccountService);

  ngOnInit(): void {
    // try to log in automatically
    this.accountService.identity().subscribe();
    // Carregar dinamicamente o script do AdminLTE
    this.loadAdminLteScript();
  }
  ngAfterViewInit(): void {
    //this.initializeOverlayScrollbars();
    console.log('ngviewIn');
  }

  private loadAdminLteScript(): void {
    const script = document.createElement('script');
    script.src = 'content/adminlte/adminlte.js'; // Substitua pelo caminho correto
    script.async = true;
    document.body.appendChild(script);
  }
  private initializeOverlayScrollbars(): void {
    const script = document.createElement('script');
    script.src = 'content/adminlte/over.js'; // Substitua pelo caminho correto
    script.async = true;
    document.body.appendChild(script);
  }
}
