import { Injectable } from '@angular/core';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesAPIService {

  constructor() { }

  apiUrl = "https://restcountries.com/v3.1";

  async getAll() {
    let res = await fetch(`${this.apiUrl}/all`);
    let data = await res.json();
    console.log(data[0])
    return data.map((elt: any) => <Country>{
      name: elt.name.common,
      capital: elt.capital,
      region: elt.region,
      flagUrl: elt.flags.png,
      population: elt.population.toLocaleString("en-US")
    })
  }

}
