import { Injectable } from '@angular/core';
import { ConversionRecord } from '../models/conversion.model';

const STORAGE_KEY = 'conversionHistory';
const MAX_RECORDS = 10; 

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private getRecords(): ConversionRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveRecords(records: ConversionRecord[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, MAX_RECORDS)));
    } catch {
      console.warn('Не вдалося зберегти історію конвертацій');
    }
  }

  add(record: ConversionRecord): void {
    const records = this.getRecords();
    records.unshift(record);
    this.saveRecords(records);
  }

  getAll(): ConversionRecord[] {
    return this.getRecords();
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}