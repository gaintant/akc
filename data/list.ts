// data/list.js
import bcrypt from 'bcryptjs';
import { readList, writeList } from './fileReader';
const saltRounds = 12;
const hashedPassword = await bcrypt.hash("password", saltRounds);

interface User {
    email: string;
    password: string;
    verified: boolean;
    role: string;
}

class UserList {
    
    async getList() {
        let list = await readList();
        return list;
    }

    async findUser(email : String) : Promise<User>{
        let list = await readList();
        return list.find((user : User) => user.email === email);
    }

    async addToList(item : User) : Promise<string>{
        
        let list = await readList();
        if (list.find((user: User) => user.email === item.email) === null){
            list.push(item);
            await writeList(list)
            return "email registered"
        }
        else{
            return "email already registered"
        }
    }

    async removeFromList(email : string){
        let list = await readList();
       
        list = list.filter((user : User)=> user.email !== email);
        await writeList(list)
    }

    async unverfiedUser(){
        let list = await readList();
       
        return list.filter((user : User) => user.verified === false);
    }

    async verifyUserByEmail(email : string) {
        let list = await readList();
       
        const userIndex = list.findIndex((user : User)=> user.email === email);
        if (userIndex !== -1) {
            list[userIndex].verified = true;
        }
        await writeList(list)
    }
}

const instance = new UserList();
export default instance;
