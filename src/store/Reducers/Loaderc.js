let initialLoading=false;
const changeLoading=(state=initialLoading,action)=>{
    if(action.type==='loader')
    {
        state=action.payload;
        return state;
        // state.push(action.payload);
    }
    return state;
}
export default changeLoading;