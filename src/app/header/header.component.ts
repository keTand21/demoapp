import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] ,


})
export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog) {}


  ngOnInit() {

  }



}
  

