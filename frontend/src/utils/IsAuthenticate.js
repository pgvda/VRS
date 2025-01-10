export const IsAuthenticate = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    if(token){
        return true
    } else {
        return false
    }
}

