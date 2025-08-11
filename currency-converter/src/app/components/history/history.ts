import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryService } from '../../services/history';
import { ConversionRecord } from '../../models/conversion.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class HistoryComponent implements OnInit {
  conversionHistory: ConversionRecord[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.conversionHistory = this.historyService.getAll();
  }

  clearHistory(): void {
    this.historyService.clear();
    this.conversionHistory = [];
  }

  formatDate(isoString: string): string {
    return new Date(isoString).toLocaleString('uk-UA');
  }
}