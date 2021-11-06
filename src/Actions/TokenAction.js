export const expire=(jwt)=>{
    return{
        type:"expire",
        value:jwt
    }
}