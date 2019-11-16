import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'pm-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit{
  listOfCategorys:string []=[];
  @Output() value = new EventEmitter<string>();
  
  constructor(
    private router: Router ,
    public dialog:MatDialog,
    private moviesService:MovieService) { }

  ngOnInit() {
    this.listOfCategorys=this.moviesService.getCategorys();
    console.log(this.listOfCategorys);
  }
  onAddMovie(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    
    this.dialog.open(AddMovieComponent, {
      width: '800px'}); 
  }

  onExit(){
    this.router.navigate(['/login']);

  }

  onClick(category: string) {
    this.value.emit(category);
  }

}
