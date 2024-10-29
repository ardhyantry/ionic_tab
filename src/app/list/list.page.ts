import { Component, OnInit } from '@angular/core';
interface Product {
  productName: string,
  productDate: Date,
  productPrice: number,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

// export class ListPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
// }
export class ListPage implements OnInit {
  product: Product = { // bikin object
    productName: 'Iphone 14',
    productDate: new Date(),
    productPrice: 14000000,
  }

  
  currentDate = new Date();
  todayDate = new Date()
  quantity = 0
  totalPrice = 0;
  numberclicked = 0;
  numberAdd = 0;
  disabledButton = false;
  disabledButtonAdd = false
  

  today: string = '8 September 2024'
  today_ind(): string {
    const month = ["January", "February", "March", "April", "Mei", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = this.currentDate.getDay();
    // Get the current day (1-31)
    const d = this.currentDate.getDate();
    // Get the current month (0-11, where 0 is January and 11 is December)
    const m = this.currentDate.getMonth(); // Adding 1 to convert to 1-12 range
    // Get the current year (four-digit year)
    const y = this.currentDate.getFullYear();
    return days[day] + ',' + d + '-' + month[m] + '-' + y;
  }
  resetDay() {
    this.currentDate.setDate(this.todayDate.getDate())
    this.numberclicked = 0;
    this.numberAdd = 0
    this.disabledButton = false
    this.disabledButtonAdd = false
  }
  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numberclicked++
    this.numberAdd--
    if (this.numberclicked == 5) this.disabledButton = true
    if (this.numberAdd <= 5) {
      this.disabledButtonAdd = false
    }
  }
  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1)
    this.numberAdd++
    this.numberclicked--
    if (this.numberAdd == 5) {
      this.disabledButtonAdd = true
    }
    if (this.numberclicked < 5) {
      this.disabledButton = false
    }
  }
  
  addQuan() {
    this.quantity += 1;
    if (this.quantity > 10) this.quantity = 10
  }
  minQuan() {
    this.quantity -= 1;
    if (this.quantity < 0) this.quantity = 0
  }
  calcPrice() {
    this.totalPrice = this.quantity * this.product.productPrice
  }
  constructor() { }
  ngOnInit() {
  }
}  
