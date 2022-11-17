
 export const setProgress=(progress)=>{
    return{
        type:'progress',
        payload:progress
    }
 }
 export const setLoader=(loading)=>{
    return {
        type:'loader',
        payload:loading
    }
 }