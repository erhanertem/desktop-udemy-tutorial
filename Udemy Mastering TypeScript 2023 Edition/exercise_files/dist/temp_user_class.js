export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} LOGGED OUT!!`);
    }
}
export function userHelper(jacketColor) {
    console.log(`${jacketColor} USER HELPER`);
}
