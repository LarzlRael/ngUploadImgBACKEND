import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(private photoService: PhotoService, private router: Router) { }

  photos = [];
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe(
      res => {
        this.photos = res,
          console.log(this.photos)
      },
      err => console.log(err)
    )
  }

  selectCard(id) {
    this.router.navigate(['/photos', id]);
  }
}
