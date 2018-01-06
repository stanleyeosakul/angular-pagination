import { Component, OnInit } from '@angular/core';
import data from './data/dummy-data';

import { PaginationService } from './services/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent implements OnInit {
  constructor(private paginationService: PaginationService) { }

  // Array of all items
  private allItems: any = [];

  // Pagination object
  pagination: any = {};

  // Paged items
  pagedItems: any[];

  ngOnInit() {
    this.allItems = data;   // Load data into allItems
    this.setPage(1);        // Initialize to page 1
  }

  setPage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }

    // Get pagination object from service
    this.pagination = this.paginationService.getPagination(this.allItems.length, page);

    // Get current page of items
    this.pagedItems = this.allItems.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}