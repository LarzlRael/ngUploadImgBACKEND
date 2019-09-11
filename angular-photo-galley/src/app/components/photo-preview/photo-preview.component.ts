import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from '../../interfaces/photoInterface'
@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private servicePhoto: PhotoService

  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'],
        this.servicePhoto.getOnePhoto(this.id).subscribe(
          res => {
            this.photo = res,
              console.log(this.photo);
          },
          err => console.log(err)
        )
    })
  }

  deleteThisPhoto(id) {
    this.servicePhoto.deletePhoto(id).subscribe(
      res => {
        console.log(res),
          this.router.navigate(['/'])
      },
      err => console.log(err)
    )

  }

  updateThisPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {

    console.log('esto tiene que actualizar');

    
    this.servicePhoto.updatePhoto(this.id, title.value, description.value)
    
      .subscribe(
        res => {
          this.router.navigate(['/'])
        },
        err => console.log(err)
      )
    console.log(title.value, description.value);
    return false;
   
  
  }
}
