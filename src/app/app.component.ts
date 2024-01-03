import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookDTO } from './bookdto';
import { AuthorDTO } from './authordto';
import { PublicationDTO } from './publicationdto';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabComponent } from './tab/tab.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DataBankComponent } from './data-bank/data-bank.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BookFormComponent,
    DataBankComponent,
    TabListComponent,
    TabComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { 'class': 'app-body' }
})
export class AppComponent {
  title = 'book-gui';

  bookInformation: BookDTO = {
    id:           0,
    name:         "",
    added:        "",
    authors:      new Set<AuthorDTO>(),
    publications: new Set<PublicationDTO>(),
  };

  activeTabIndex: number = 0;


  tabChanged(tabIndex: number) {
    this.activeTabIndex = tabIndex;
  }
}
