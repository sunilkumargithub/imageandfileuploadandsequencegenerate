import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import {HttpModule} from '@angular/http';
import { SequencegenerateComponent } from './sequencegenerate/sequencegenerate.component';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    SequencegenerateComponent,
    RecaptchaComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RecaptchaModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
