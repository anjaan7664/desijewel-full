export default async function({$auth, redirect}){
 
    let user = $auth.state.user;
    if(user && (!user.role.includes('user') )  ){ 

    }else{
        redirect('/')
    }
}