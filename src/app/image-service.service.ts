import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: Http) { }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    console.log('pre formdata' , formData);
    formData.set('image', image);
    // formData.append('image', image);
console.log('formdata' , formData);
     return this.http.post('/api/v1/image-upload', formData);
  }
}
