import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.page.html',
  styleUrls: ['./list-coupon.page.scss'],
})

export class ListCouponPage implements OnInit {
  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discounts: 5
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
      discounts: 10
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
      discounts: 15
    }
  ]
  couponcode: string = "0000"
  strvalid: string = "Invalid"
  discount: number = 0
  textcolor: string = "red"

  styleText:string=""

  currentDate = new Date();
  todayDate = new Date()

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
  }
  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
  }
  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1)

  }
  checkValid() {
    if (this.couponcode == "1234") {
      this.strvalid = "Valid"
      this.discount = 5
      this.textcolor = "green"
      this.styleText="line-through"
      
    }
    else if (this.couponcode == "6789") {
      this.strvalid = "Valid"
      this.discount = 10
      this.textcolor = "green"
      this.styleText="line-through"
    }
    else {
      this.strvalid = "Invalid"
      this.discount = 0
      this.textcolor = "red"
      this.styleText =""
    }
  }
  applyDiscountCode(book:any){
    const discounts = this.applyDiscount(book)
    const discountCode = discounts - (discounts*(this.discount/100))
    return parseFloat(discountCode.toFixed(2))
  }

  applyDiscount(book: any) {
    const discount = book.price - (book.price* (book.discounts/100));
    const totPrice = discount.toFixed(2);
    return parseFloat(totPrice);
  }
  constructor() { }

  ngOnInit() {
  }

}
