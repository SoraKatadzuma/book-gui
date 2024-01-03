import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './tab-list.component.html',
  styleUrl: './tab-list.component.css',
  host: { 'class': 'self-align-start' }
})
export class TabListComponent implements OnInit {
  @Input()  tabsArray:    string[];
  @Output() onTabChanged: EventEmitter<number>;

  activeTab: number = 0;

  constructor() {
    this.tabsArray    = [];
    this.onTabChanged = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  setTab(index: number) {
    this.activeTab = index;
    this.onTabChanged.emit(this.activeTab);
  }
}
