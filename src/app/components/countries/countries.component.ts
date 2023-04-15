import { Component, OnInit } from '@angular/core';
import { CountriesAPIService } from 'src/app/services/countries-api.service';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{
  countries: Country[] = [];
  constructor(private countriesAPIService: CountriesAPIService) {}

  async ngOnInit() {
    this.countries = await this.countriesAPIService.getAll();
  }
}

