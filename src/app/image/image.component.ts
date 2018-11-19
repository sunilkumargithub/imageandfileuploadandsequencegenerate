import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
// https://medium.freecodecamp.org/how-to-make-image-upload-easy-with-angular-1ed14cb2773b
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  // public currentimage = '../../assets/rose.jpeg';
  currentimage = '../../assets/rose.jpeg';
  selectedFile: ImageSnippet;
  constructor(private imageService: ImageServiceService) {

   }

  ngOnInit() {

  }

  changeimage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
    console.log('jnviuerviu');
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.currentimage  = this.selectedFile.src;
      console.log('selected file' , event.target.result);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
console.log('res is ' , res);
        },
        (err) => {
          console.log('err is ' , err);
        });
    });

    reader.readAsDataURL(file);
  }


}
