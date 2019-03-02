export const people = [
    {
        id:"0",
        name:"Young",
        age:26,
        gender:"male"
    },
    {
        id:"1",
        name:"Woo",
        age:16,
        gender:"female"
    },
    {
        id:"2",
        name:"Gloria",
        age:18,
        gender:"male"
    },
    {
        id:"3",
        name:"Yeyoung",
        age:24,
        gender:"female"
    },
    {
        id:"4",
        name:"You",
        age:6,
        gender:"male"
    }
];

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};

let movies = [
    {
        id: 1,
        name: "god father",
        score: 10
    },
    {
        id: 2,
        name: "god mother",
        score: 20
    },
    {
        id: 3,
        name: "god grandfather",
        score: 30
    },
    {
        id: 4,
        name: "got grandmother",
        score: 40
    }
];

export const getMovies = () => movies;

export const addMovie = (name,score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    console.log("add "+newMovie.name);
    return newMovie;
}