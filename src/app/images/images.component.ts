import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';


@Component({
  selector: 'app-upload-image',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent  {
  

  TicketArray : any[] = [];


  comment: string ="";
  imageUrl: File | undefined;
  location: string ="";
    id= "";
  mapCenter: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
mapZoom = 2;

markerPosition: google.maps.LatLngLiteral = this.mapCenter;
latitude = '';
longitude = '';

showLocation() {
  const lat = parseFloat(this.latitude);
  const lng = parseFloat(this.longitude);
  if (!isNaN(lat) && !isNaN(lng)) {
    this.mapCenter = { lat, lng };
    this.markerPosition = { lat, lng };
  } else {
    alert('Please enter valid latitude and longitude.');
  }
}

  constructor(private http: HttpClient )
  {
    this.getAllTicket();
 
  }

  register()
  {
  
    let bodyData = {
      "comment" : this.comment,
      "imageUrl" : this.imageUrl,
      "location" : this.location
    };
 
    this.http.post("http://localhost:8081/api/v1/image/save", bodyData,{responseType:'text'}).subscribe((resultData: any) => 
    {
      console.log(resultData);
      alert("Ticket Registered Successfully");
      this.getAllTicket();

      this.comment = '';
      this.imageUrl = undefined;
      this.location = '';
  });
  
  }


  getAllTicket()
  {
    
    this.http.get("http://localhost:8081/api/v1/image/getAll")
  
    .subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.TicketArray = resultData;
    });
  }


  setUpdate(data: any)
  {
   this.comment = data.Comment;
   this.imageUrl = data.imageUrl;
   this.location = data.location;
   this.id = data._id;
   alert(data._id);
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "comment" : this.comment,
      "imageUrl" : this.imageUrl,
      "location" : this.location,
  
    };
  }}
 
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ImageService } from '../images.service';

// @Component({
//   selector: 'app-upload-image',
//   templateUrl: './images.component.html',
//   styleUrls: ['./images.component.css']
// })
// export class UploadImageComponent implements OnInit {
//   imageForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, private imageService: ImageService) { }

//   ngOnInit(): void {
//     this.imageForm = this.formBuilder.group({
//       image: [''],
//       comment: [''],
//       location: ['']
//     });
//   }

//   onSubmit() {
//     const formData = new FormData();
//     formData.append('image', this.imageForm.get('image')?.value);
//     formData.append('comment', this.imageForm.get('comment')?.value);
//     formData.append('location', this.imageForm.get('location')?.value);

//     this.imageService.uploadImage(formData).subscribe(
//       (response: any) => {
//         console.log('Image uploaded successfully!', response);
//         // Traiter la réponse du backend si nécessaire
//       },
//       (error: any) => {
//         console.error('Error uploading image:', error);
//         // Gérer les erreurs
//       }
//     );
//   }
// }
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';

// import { ImageService } from '../images.service';

// @Component({
//   selector: 'app-upload-image',
//   templateUrl: './images.component.html',
//   styleUrls: ['./images.component.css'],
//   providers: [ImageService]
// })
// export class UploadImageComponent implements OnInit {
//   imageForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, private imageService: ImageService) { }

//   ngOnInit(): void {
//     this.imageForm = this.formBuilder.group({
//       image: [''],
//       comment: [''],
//       location: ['']
//     });
//   }

 
//   onSubmit() {
//     const formData = new FormData();
//     formData.append('image', this.imageForm.get('image')?.value);
//     formData.append('comment', this.imageForm.get('comment')?.value);
//     formData.append('location', this.imageForm.get('location')?.value);

//     this.imageService.uploadImage(formData).subscribe(
//       (response: any) => {
//         console.log('Image uploaded successfully!', response);
//         // Traiter la réponse du backend si nécessaire
//       },
//       (error: any) => {
//         console.error('Error uploading image:', error);
//         // Gérer les erreurs
//       }
//     );
//   }
// }
