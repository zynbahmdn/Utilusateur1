// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ImageService } from '../images.service';

// @Component({
//   selector: 'app-upload-image',
//   templateUrl: './images.component.html',
//   styleUrls: ['./images.component.scss'] , 
//    providers: [ImageService]
// })
// export class UploadImageComponent implements OnInit {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
//   imageForm: FormGroup | undefined;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.imageForm = this.formBuilder.group({
//       image: [''],
//       comment: [''],
//       location: ['']
//     });
//   }

 
// }




import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesComponent } from './images.component';

describe('ImageFormComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
