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

const movieNames = movies.map(function(movie)
{
    return movie.title.toUpperCase();
});

console.log(movieNames);

///(4) ['AMADEUS', 'STAND BY ME', 'PARASITE', 'ALIEN']

//movieNames
// (4) ['Amadeus', 'Stand By me', 'Parasite', 'Alien']