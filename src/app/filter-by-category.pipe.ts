import { Pipe, PipeTransform, Inject, Injectable } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(allMovies: Movie[], selectedCategory: string): any {
    console.log("In function");
    console.log(allMovies);
    console.log(selectedCategory);

  

    let selectedMovies: Movie[] = [];

    for (let i = 0; i < allMovies.length;++i)
    {
      console.log(allMovies[i].category);
      if (allMovies[i].category ==  selectedCategory)
        selectedMovies.push(allMovies[i]);
    }

    return allMovies.filter(m => m.category == selectedCategory);
  }

}
