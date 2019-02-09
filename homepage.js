
class Movie {
  constructor(title,poster,cast,trailer) {
    this.title = title;
    this.poster = poster;
    this.cast = cast;
    this.trailer = trailer;
    this.MovieTrailerTemplate=document.getElementById("movie-trailer-template").innerHTML;
  }


  render(){
    const result = this.MovieTrailerTemplate
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",this.poster)
        .replace("{{this.cast}}",this.cast)
        .replace("{{this.link}}",this.link)
    return result;
}
}

class Utility{
static getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
}
const array=[];
const movies=[
  {
    "title": "Deadpool II",
    "poster": "https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_.jpg",
    "cast": " Ryan Reynolds, Rob Liefeld, Rhett Reese, Paul Wernick, Fabian Nicieza",
    "trailer" : "https://www.youtube.com/watch?v=D86RtevtfrA"
  },
  {
     "title": "Venom",
      "poster": "https://www.joblo.com/assets/images/oldsite/posters/images/full/venompostertransform.jpg",
      "cast": "hi",
      "link":"https://www.youtube.com/watch?v=RBumgq5yVrA"
  }
  
];
for (var key in movies) {
  const movie= new Movie(movies[key].title,movies[key].poster,movies[key].cast,movies[key].trailer);
   array.push(movie)
}
console.log(array);
let i=0;
const nodeList=document.querySelectorAll("#movie-list");
console.log(nodeList);
for(let item of nodeList){   
item.innerHTML=array[i++].render();
} 

