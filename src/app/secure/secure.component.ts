import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { HttpService } from '../http.service';
import { FilterByCategoryPipe } from '../filter-by-category.pipe';

@Component({
  selector: 'pm-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  movies:Movie[] = [];
  selectedMovies:Movie[] = [];
  selectedCategory: string = "";
  private filterByCategoryPipe: FilterByCategoryPipe = new FilterByCategoryPipe();

  constructor(
    private httpService:HttpService,
    private moviesService:MovieService) {
  }

  ngOnInit() {
    if(this.moviesService.movies.length==0)
    {
      this.httpService.getMovies()
      .subscribe((movies:Movie[]) => {
        this.moviesService.insertMovies(movies);
        console.log(this.moviesService.movies);
        this.moviesService.setCategorys();

        this.movies=this.moviesService.getMovies();

        if (this.movies.length > 0)
        {
          this.selectedCategory = this.movies[0].category;
        }

        console.log('before search ');
        console.log(this.movies);
        this.search();
      });
    }
    else
    {
      this.movies=this.moviesService.getMovies();

      if (this.movies.length > 0)
      {
        this.selectedCategory = this.movies[0].category;
      }

      console.log('before search ');
      console.log(this.movies);
      this.search();
    }
  }
  onNewSelection(category:string){
    this.selectedCategory = category;
    this.search();
  }

  search() {
    this.selectedMovies = this.filterByCategoryPipe.transform(this.movies, this.selectedCategory);
  }
  

}
