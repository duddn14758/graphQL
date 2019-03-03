let info_list = [
    {
        title:"title1",
        contents:"Next, set up a form for capturing details about a GitHub organization and repository from a user. It should be possible to fill out an input field to request a paginated list of issues for a specific GitHub repository. ",
        classify:"origin"
    },
   {
    title:"title2",
    contents:"hello my name is",
    classify:"origin"
   },
   {
    title:"부경대학교",
    contents:"부산 국립 부경대학교",
    classify:"학교"
   }
];

let reference = [
    {
        parents:"title1",
        reference_number:1,
        child:"title2"
    },
    {
        parents:"부경대학교",
        reference_number:1,
        child:"title1"
    }
];

let history=[
    {
        edit_code:123,
        title:"title1",
        id:"young",
        edit_contents:"hellllooolldf",
        date:"2019-03-02"
    },
    {
        edit_code:124,
        title:"title1",
        id:"young",
        edit_contents:"wwoowowoowwowowwwowowo",
        date:"2019-03-02"
    },
    {
        edit_code:125,
        title:"부경대학교",
        id:"young",
        edit_contents:"홀롤롤ㄹ롤ㄹㄹ",
        date:"2019-03-01"
    },
    {
        edit_code:126,
        title:"부경대학교",
        id:"dokdokorea",
        edit_contents:"구국국",
        date:"2019-03-02"
    }
];

let user_info=[
    {
        id:"young",
        name: "김영우",
        nick_name:"duddn14758",
        password:"1234",
        email:"duddn14758@naver.com",
        is_signed:true,
        token:1
    }
];

export const getContentsByTitle = title => {
    const searchedContents=info_list.filter(content => content.title === title);
    console.log(title);
    return searchedContents[0];
}

export const getHistoriesByTitle = title => {
    const filteredHistories = history.filter(histories => histories.title === title);
    return filteredHistories;
}

export const getHistoriesById = id => {
    const filteredHistories = history.filter(histories => histories.id === id);
    return filteredHistories;
}

export const getLinkedReference = (title,refNum) => {
    const filteredReference = reference.filter(ref => (title === ref.parents)&&(refNum===ref.reference_number));
    console.log(filteredReference[0].child);
    return filteredReference[0];
}

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

export const addContent = (title,contents,classify) => {
    const newContent = {
        title,
        contents,
        classify
    };
    console.log(title);
    info_list.push(newContent);
    console.log("add "+newContent.title);
    return newContent;
}

export const addReference = (parents,child) => {
    const checkedReference = reference.filter(ref => ref.parents === parents);
    const newReference = {
        parents,
        reference_number: `${checkedReference.length+1}`,
        child
    };
    reference.push(newReference);
    console.log("add "+newReference.parents+" to "+newReference.child+" by refNum "+(checkedReference.length+1));
    return newReference;
}

export const addHistory = (title,id,edit_contents) => {
    let cur=new Date();

    const newHistory = {
        edit_code:history.length+1,
        title,
        id,
        edit_contents,
        date: cur.getFullYear()+"-"+(cur.getMonth()+1)+"-"+cur.getDate()
    };
    history.push(newHistory);
    
    return newHistory;
}