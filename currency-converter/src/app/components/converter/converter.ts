import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService, CurrencyCode } from '../../services/currency';
import { HistoryService } from '../../services/history';
import { ConversionRecord } from '../../models/conversion.model';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})
export class ConverterComponent implements OnInit {
  amount = 100;
  fromCurrency: CurrencyCode = 'USD';
  toCurrency: CurrencyCode = 'EUR';
  conversionResult: number | null = null;

  constructor(
    public currencyService: CurrencyService,
    private historyService: HistoryService
  ) {}

  ngOnInit(): void {
    this.performConversion();
  }

  performConversion(): void {
    const result = this.currencyService.convert(this.amount, this.fromCurrency, this.toCurrency);
    this.conversionResult = Math.round(result * 100) / 100; 

    this.saveToHistory();
  }

  swapCurrencies(): void {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
    this.performConversion();
  }

  onAmountChange(): void {
    if (this.amount >= 0) {
      this.performConversion();
    }
  }

  private saveToHistory(): void {
    if (this.conversionResult === null) return;

    const record: ConversionRecord = {
      when: new Date().toISOString(),
      amount: this.amount,
      from: this.fromCurrency,
      to: this.toCurrency,
      result: this.conversionResult,
      pretty: `${this.amount} ${this.fromCurrency} → ${this.conversionResult} ${this.toCurrency}`
    };

    this.historyService.add(record);
  }
}