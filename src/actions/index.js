export const addTodo = (text) => {
    return {
      type: "ADD_TASK",
      payload: {
        id: new Date().getTime(),
        text: text,
      },
    };
};

// export const getTodos =()=>{
//   return{
//     type:"GET_TASK",
//    }
// }

export const deleteTodo = (id) =>{
    return{
        type: "DELETE_TASK",
        payload:id,
    }
    };