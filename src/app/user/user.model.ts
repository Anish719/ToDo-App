export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public gender: string,
        public address: string,
        public profileImage: string | ArrayBuffer,
        public todoList: any[],
    ) {}
}