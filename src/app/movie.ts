export class Movie {
    
    
    constructor(public name:string,public category:string , public link?:string ,public poster?:string ){
        this.name=name;
        this.category=category;
        this.link=link;
        this.poster=poster;
    }
  
}