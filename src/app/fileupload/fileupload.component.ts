import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  onchange(e) {
    const myfile: File = e.target.files;
console.log('myfile ' , myfile);

  }
}
