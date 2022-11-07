import { Error } from "./error.model";
import { Role } from "./role.model";

export interface AuthResponceData {
  //   user_id: number;
  // name: string;
  // email: string;
  // roles : Array<Role>
  data: { user_id: number,
         name: string,
         email: string,
         roles : Array<Role>}
  token:string;
  errors: any
}
