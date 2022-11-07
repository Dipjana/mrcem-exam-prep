import { Role } from "./role.model";
export class User{
    constructor(
        private user_id: number,
        private name: string,
        private email: string,
        private token: string,
        private role: Array<Role>,
        // private error: string
        
    ){}
}