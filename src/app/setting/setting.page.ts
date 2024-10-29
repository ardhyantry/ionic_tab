import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  linkPic: string = ""
  password: string = ""
  wordCheck: boolean = false
  numberCheck: boolean = false
  specialCheck: boolean = false

  specialChar: string = "!@#$%^&*"
  numberString: string = "1234567890"

  checkPassword() {
    if(this.password== ""){
      this.wordCheck = false
      this.numberCheck =false
      this.specialCheck = false
    }
    if (this.password.length > 6) {
      this.wordCheck = true
    } else {
      this.wordCheck = false
    }
    for (let i = 0; i < this.password.length; i++) {
      if (this.specialChar.includes(this.password[i])) {
        this.specialCheck = true
        break
      }
      else {
        this.specialCheck = false
      }
    }
    for (let i = 0; i < this.password.length; i++) {
      if (this.numberString.includes(this.password[i])) {
        this.numberCheck = true
        break
      }
      else {
        this.numberCheck = false
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
