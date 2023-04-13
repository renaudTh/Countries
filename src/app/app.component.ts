import { Component, OnInit } from '@angular/core';
import { CountriesAPIService } from './services/countries-api.service';
import { Country } from './models/Country';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countries: Country[] = [];
  constructor(private countriesAPIService: CountriesAPIService) {

  }

  async ngOnInit() {
    this.countries = await this.countriesAPIService.getAll();
  }
}
