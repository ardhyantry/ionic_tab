import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})
export class PastaPage implements OnInit {
  jenistampilan: string = "accordion";
  filter: string = "";
  filtered: any[] = [];    

  constructor(private foodservice: FoodserviceService) {}

  ngOnInit() {
    this.foodservice.pastaList().subscribe(
      (data) => {
        this.filtered = data; 
      }
    );
  }

  onSearchChange(event: any) {
    this.filter = event.detail.value;
    this.bindData();
  }

  bindData(){
    this.foodservice.pastaList(this.filter).subscribe(
      (data) => {
        this.filtered = data; 
      }
    );
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
}
