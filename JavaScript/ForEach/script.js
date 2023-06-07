const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];

movies.forEach(function(movie)
{
    console.log(`${movie.title} : ${movie.score}/100`);
});

//Here we are writing an inline function for the array of object called movies
// here movie is one instance of movies like(movie in movies)