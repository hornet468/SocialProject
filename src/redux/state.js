import { rerenderTree } from "../render";

let state = {

    messagePage : {
        DialogsData:[
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Tom'},
            {id: 4, name: 'Obama'}
          ],
        MessageData:[
            {id: 1, message: 'hi'},
            {id: 2, message: 'what are you doing'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'I will win'}
          ]

    },

    profilePage : {
        PostsData:[
            {id: 1, message: 'hello waorld', LikeCount: '45'},
            {id: 2, message: 'how are you?', LikeCount: '4'}
          ],
        newPostText: 'helllo wprld'
          
    }
   
   

  }

  export let addPost = (postMessage) => {

    let newPost = {
      id: 5,
      message: postMessage,
      LikeCount: 0
    };

    state.profilePage.PostsData.push(newPost);
    rerenderTree(state);
  }
  

  export default state;