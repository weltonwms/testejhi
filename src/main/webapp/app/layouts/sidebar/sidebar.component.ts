import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountService } from 'app/core/auth/account.service';
import HasAnyAuthorityDirective from 'app/shared/auth/has-any-authority.directive';
import SharedModule from 'app/shared/shared.module';

@Component({
  selector: 'jhi-sidebar',
  standalone: true,
  imports: [RouterModule, SharedModule, HasAnyAuthorityDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  account = inject(AccountService).trackCurrentAccount();
  isNavbarCollapsed = signal(true);

  ngOnInit(): void {
    this.loadOverScript();
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed.set(true);
  }

  private loadOverScript(): void {
    const script = document.createElement('script');
    script.src = 'content/adminlte/over.js'; // Substitua pelo caminho correto
    script.async = true;
    document.body.appendChild(script);
  }
}
