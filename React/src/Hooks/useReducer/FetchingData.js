import axios from 'axios';
import React,{useReducer,useEffect} from 'react';

const initialState ={
    loading: true,
    post:{},
    error:''
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post: action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                post: {},
                error:'Something went wrong'
            }
        default:
            return state
    }
}

function FetchingData(props) {
    const [state, dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            dispatch({type:'FETCH_SUCCESS', payload:response.data})
        })
        .catch(err =>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default FetchingData;