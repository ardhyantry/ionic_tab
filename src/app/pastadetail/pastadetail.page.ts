import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService ,Pasta} from '../foodservice.service';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {
  pastas: Pasta[] = [];
  pasta:any = {}

  index: number = 0;
  constructor(private route: ActivatedRoute , private foodservice: FoodserviceService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.foodservice.pastaDetail(params['index']).subscribe(
        (data)=> {
         this.pasta=data;
        }
       );  
    });
    // this.pastas = this.foodservice.pastas;
  }
}
