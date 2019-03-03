import {getMovies, getById, addMovie, deleteMovie, getContentsByTitle,getHistoriesByTitle,
     getHistoriesById, addContent, getLinkedReference, addReference, addHistory} from "./db";
import { getIntrospectionQuery } from "graphql";

const resolvers = {
    Query: {
        movies : () => getMovies(),
        movie : (_, {id}) => getById(id),
        content_by_title : (_,{title}) => getContentsByTitle(title),     // 해당 글 조회시 나오는 내용
        histories_by_title :(_,{title}) => getHistoriesByTitle(title),    // 해당 글 수정 히스토리
        histories_by_id :(_,{id}) => getHistoriesById(id),
        linking_parents_to_child :(_,{title, refNum}) => getLinkedReference(title,refNum)
    },
    Mutation: {
        addMovie: (_,{name,score}) => addMovie(name,score),
        deleteMovie: (_,{id}) => deleteMovie(id),
        addContent: (_,{title,contents,classify}) => addContent(title,contents,classify),
        addReference: (_,{parents,child}) => addReference(parents,child),
        addHistory: (_,{title,id,contents}) => addHistory(title,id,contents)
    }
}

export default resolvers;