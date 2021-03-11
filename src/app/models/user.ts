export interface User{
    userId:number,
    firstName:string,
    lastName:string,
    email:string,
    passwordHash:BinaryType,
    passwordSalt:BinaryType,
    status:boolean
}