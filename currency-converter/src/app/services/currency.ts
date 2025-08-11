import { Injectable } from '@angular/core';

export type CurrencyCode = 'USD' | 'EUR' | 'UAH' | 'GBP' | 'PLN';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private readonly exchangeRates: Record<CurrencyCode, number> = {
    USD: 1,
    EUR: 0.92,
    UAH: 41.0,
    GBP: 0.78,
    PLN: 3.95
  };

  get availableCodes(): CurrencyCode[] {
    return Object.keys(this.exchangeRates) as CurrencyCode[];
  }

  convert(amount: number, fromCode: CurrencyCode, toCode: CurrencyCode): number {
    if (!this.isValidAmount(amount) || !this.isValidCurrency(fromCode) || !this.isValidCurrency(toCode)) {
      return 0;
    }

    if (fromCode === toCode) {
      return amount;
    }

    const usdAmount = amount / this.exchangeRates[fromCode];
    return usdAmount * this.exchangeRates[toCode];
  }

  private isValidAmount(amount: number): boolean {
    return typeof amount === 'number' && isFinite(amount) && amount >= 0;
  }

  private isValidCurrency(code: CurrencyCode): boolean {
    return code in this.exchangeRates;
  }
}
