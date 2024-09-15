// data/list.js
import bcrypt from 'bcryptjs';
import { readList, writeList } from './fileReader';
const saltRounds = 12;
const hashedPassword = await bcrypt.hash("password", saltRounds);

class UserList {
    
    async getList() {
        let list = await readList();
        return list;
    }

    async findUser(email) {
        let list = await readList();
        return list.find((user) => user.email === email);
    }

    async addToList(item) {
        
        let list = await readList();
        if (list.find((user) => user.email === item.email) === null){
            list.push(item);
            await writeList(list)
            return "email registered"
        }
        else{
            return "email already registered"
        }
    }

    async removeFromList(email) {
        let list = await readList();
       
        list = list.filter(user => user.email !== email);
        await writeList(list)
    }

    async unverfiedUser() {
        let list = await readList();
       
        return list.filter(user => user.verified === false);
    }

    async verifyUserByEmail(email) {
        let list = await readList();
       
        const userIndex = list.findIndex(user => user.email === email);
        if (userIndex !== -1) {
            list[userIndex].verified = true;
        }
        await writeList(list)
    }
}

const instance = new UserList();
export default instance;
