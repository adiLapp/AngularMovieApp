import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'pm-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie:Movie;
  @Input() index:number;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }
  onDelete(){
    this.movieService.deleteByIndex(this.index);
  }

}
