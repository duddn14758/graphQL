import {getMovies, getById, addMovie, deleteMovie, getContentsByTitle,getHistoriesByTitle,
     getHistoriesById, addContent, getLinkedReference, addReference, addHistory,
     searchAllHistory, login, findUserInfoById, findId, addSignUp, deleteAccount} from "./db";
import { getIntrospectionQuery } from "graphql";

const resolvers = {
    Query: {
        movies : () => getMovies(),
        movie : (_, {id}) => getById(id),
        content_by_title : (_,{title}) => getContentsByTitle(title),     // 해당 글 조회시 나오는 내용
        histories_by_title :(_,{title}) => getHistoriesByTitle(title),    // 해당 글 수정 히스토리
        histories_by_id :(_,{id}) => getHistoriesById(id),
        linking_parents_to_child :(_,{title, refNum}) => getLinkedReference(title,refNum),

        all_history: ()=>searchAllHistory(),
        check_user_info: (_,{id,password})=>login(id,password), //아이디&비밀번호로 로그인
        userinfo_by_id:(_,{id})=>findUserInfoById(id),    //아이디로 개인정보 다 불러오기
        findId:(_,{name,email}) => findId(name,email),  //아이디 찾기
    },
    Mutation: {
        addMovie: (_,{name,score}) => addMovie(name,score),
        deleteMovie: (_,{id}) => deleteMovie(id),
        addContent: (_,{title,contents,classify}) => addContent(title,contents,classify),
        addReference: (_,{parents,child}) => addReference(parents,child),
        addHistory: (_,{title,id,contents}) => addHistory(title,id,contents),

        addSignUp:(_,{id,name,password,nickName,email})=> addSignUp(id,name,password,nickName,email),
        deleteAccount:(_,{id}) => deleteAccount(id),    //회원탈퇴
    }
}

export default resolvers;