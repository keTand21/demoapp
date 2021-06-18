import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../register/register.model';
import { HomeService } from 'src/app/component/service/home.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
 private arrProfile : any = [];
 public ObjRegisterModel = RegisterModel ;
  constructor(
    private homeService : HomeService ,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
  ) { 
    
  }

  ngOnInit(): void {
    this.showuser()
  }

  showuser(){
    this.homeService.getallUser().subscribe((Response)=> {   
      this.arrProfile = Response;
     })
  }

  editphoto( ObjRegisterModel = RegisterModel, openDialogInMode = 'edit'){ 
    const dialogRef = this.dialog.open(RegisterComponent,
      { data: { ObjRegisterModel, openDialogInMode }, disableClose: true });
    dialogRef.afterClosed().subscribe(resp => {
      if (!resp) {
        return;
      } else {
        this.showuser()
      }
    });
  }

  editprofile( ObjRegisterModel = RegisterModel, openDialogInMode = 'edit'){ 
      const dialogRef = this.dialog.open(RegisterComponent,
        { data: { ObjRegisterModel, openDialogInMode }, disableClose: true });
      dialogRef.afterClosed().subscribe(resp => {
        if (!resp) {
          return;
        } else {
           this.showuser()
        }
      });
    }

}
