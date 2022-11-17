let initialProgress=0;
const changeProgress=(state=initialProgress,action)=>{
    if(action.payload && action.type==='progress')
    {
        state=action.payload;
        return state;
        // state.push(action.payload);
    }
    return state;
}
export default changeProgress;