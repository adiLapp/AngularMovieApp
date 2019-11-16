import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Movie[]=[];
  listOfCategorys:string[]=[];

  getMovies(){
    return this.movies;
  }
  insertMovies(movies:Movie [])
  {
    this.movies.push(...movies);

  }
  insertMovie(movie:Movie)
  {
    this.movies.push(movie);
    console.log(this.listOfCategorys);
    console.log(movie.category);
    if(this.listOfCategorys.indexOf(movie.category)==-1){
      this.listOfCategorys.push(movie.category);
    }
    
  }
  searchMovieByName(name:string)
  {
    var check=false;
    for(var i=0;i<this.movies.length;i++)
    {
      if(this.movies[i].name==name)
      {
        check=true;
      }
    }
    return check;
  }
  deleteByIndex(index:number)
  {
    this.movies.splice(index,1);
    this.listOfCategorys.splice(index,1);
    console.log(this.listOfCategorys);
  }
  setCategorys(){

    for(var i=0;i<this.movies.length;i++)
    {
   
      if(this.listOfCategorys.indexOf(this.movies[i].category)==-1){
        this.listOfCategorys.push(this.movies[i].category);
      }
     
    }
  }
  getCategorys(){
    return this.listOfCategorys;
  }
}
