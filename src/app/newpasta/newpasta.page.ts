import { Component, OnInit } from '@angular/core';
import { FoodserviceService, Pasta } from '../foodservice.service';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
})
export class NewpastaPage implements OnInit {
  new_name: string = '';
  new_desc: string = '';
  new_price: number = 0;
  new_url: string = '';
  new_spicy:boolean=false;
  public alertButtons = ['OK'];
  arr_price: number[] = [];


  constructor(private foodservice: FoodserviceService,  private router: Router) { }

  ngOnInit() {
    this.arr_price = this.generateNumberOptions(30000, 50000, 2000);
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  }
  submitpasta() {
    this.foodservice.addPasta(
      this.new_name,
      this.new_url,
      this.new_desc,
      this.new_price,
      this.new_spicy,
    );
    this.router.navigate(['/pasta']);
    // console.log(this.foodservice.pastas)
  }
}
