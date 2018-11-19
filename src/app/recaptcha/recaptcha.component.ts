import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Resolved(captchaResponse: string) {
    console.log('resplved captcha with response' , captchaResponse );
  }

  onsubmit() {

  }

}
