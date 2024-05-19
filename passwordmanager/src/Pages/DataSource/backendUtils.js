import axios from "axios";



const permittedEndPoints = axios.create({
    baseURL:"http://localhost:8080/api/password-manager/auth",
    withCredentials:true
});


export async function userRegistration(registrationRequest){
    return await permittedEndPoints.post("/register", registrationRequest);
}
export async function login(registrationRequest){
    return await permittedEndPoints.post("/login",registrationRequest);
}

export async function refreshToken(){
    return await permittedEndPoints.put("/refresh/token");
}