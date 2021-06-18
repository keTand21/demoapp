import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs'
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
import { RegisterComponent } from '../register/register.component';
import { switchMap, catchError } from 'rxjs/operators'

import {MatDialog} from '@angular/material/dialog';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]

})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  index: number = 0;
  numImages: number = 4;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    "https://picsum.photos/id/402/2500/1667",
    "https://picsum.photos/id/301/2500/1667",
    "https://picsum.photos/id/302/2500/1667",
     "https://picsum.photos/id/400/2500/1667"]

  ngOnInit(): void {
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = (() => {
        this.imagesLoaded++;
        this.loading = (this.imagesLoaded != this.numImages)
      })
      image.src = x
    })
    interval(5000).subscribe(() => {
      if (!this.loading)
        this.index = (this.index + 1) % this.numImages
    })
  }

  addregister()
  {

  const dialogRef = this.dialog.open(RegisterComponent,
    { data: {  }, width: '800px', disableClose: true });
  dialogRef.afterClosed().subscribe(resp => {

    dialogRef.afterClosed().subscribe(resp => {
      if (!resp) {
        return;
      }
      console.log('afterClosed resp', resp);
    
    });

  });

  }

}
