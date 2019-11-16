import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMovieComponent> ,
    private httpClient: HttpClient,
    private moviesService:MovieService) { }
  movie:Movie
  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }
  onSubmitMovie(form:NgForm){
    if(!form.valid){
      return;
    }

 
    console.log(form.value);
    var checkMovieExist = this.moviesService.searchMovieByName(form.value.name);
    if(checkMovieExist==true)
    {
      alert('הסרט כבר קיים');
      return;
    }
    if(!this.checkLink(form.value.movieLink))
    {
      alert('imdb הקישור הוא לא ל ')
      return;
    }
    if(!this.checkLink(form.value.posterLink))
    {
      alert('imdb הקישור לפוסטר הוא לא ל ')
      return;
    }
    this.checkLink(form.value.movieLink);

    

    const movie = new Movie(form.value.name,form.value.category,form.value.movieLink,form.value.posterLink);
    this.moviesService.insertMovie(movie);
    this.dialogRef.close();
  }

  private checkLink(link:string){
    var checkFlag=false;
    var linkArray:string[] =link.split('.');
    for(var i=0;i<linkArray.length;i++)
    {
      if(linkArray[i]=='imdb')
      {
        checkFlag=true;
      }
    }
    return checkFlag;
  }
}
