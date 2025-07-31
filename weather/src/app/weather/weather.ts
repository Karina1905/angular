import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class Weather {
  weatherData: any = null;
  forecastDays: any[] = [];
  location: any = null;
  current:any = null;

 async search(city: string) {
  const apiKey = '04876c5d24fe4f7a8f1110103230908';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=3`;

  const response = await fetch(url);
  if(!response.ok){
    console.error('Error:', response.status)
    return
  }

  const data = await response.json();
    console.log(data);


  const hist: string[] = JSON.parse(localStorage.getItem('searchHistory') || '[]')
  hist.unshift(city)
  if(hist.length > 10) hist.pop()
    localStorage.setItem('searchHistory', JSON.stringify(hist))

  this.weatherData = data.current;
  this.location = data.location;
  this.forecastDays = data.forecast.forecastday;
  this.current = data.current;
}

close() {
  this.weatherData = null;
  this.location = null;
  this.forecastDays = [];
  this.current = null;
}

}


