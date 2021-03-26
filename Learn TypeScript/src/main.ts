

// VARIABLE AND FUNCTION DECLARATION

// const getFullName = (name: string, surname: string): string => {
//     return name + " " + surname;
// };
// console.log(getFullName("Dylan", "Lancaster"))

// interface UserInterface {
//     name: string;
//     age?: number;
//     getMessage(): string;
// }

// INTERFACES

// const user: UserInterface = {
//     name: "Dylan",
//     age: 22,
//     getMessage() {
//         return "Hello " + name;
//     },
// };

// const user2: UserInterface = {
//     name: "Seth",
//     getMessage() {
//         return "Hello " + name;
//     },
// };

// UNION AND TYPE ALIASES

// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null

// interface UserInterface {
//     id: ID;
//     name: string
//     surname: string
// }

// const popularTags: PopularTag[] = ["dragon", "coffee"]
// const dragonsTag: MaybePopularTag = "dragon";

// let username: string = "Dylan";
// let pageName: string | number = "1";
// let errorMessage: string | null = null;
// let user: UserInterface | null = null;
// let someProp: string | number | null | undefined | string[] | object;

// VOID & ANY IN TYPESCRIPT

//  const doSomething = (): void => {
//      console.log("doSomething");
//  };

//  let foo: any = "foo";
//  console.log(foo.bar());

// NEVER IN TYPESCRIPT

// const doSomething = (): never => {
//     throw "never";
// };

// UNKNOWN IN TYPESCRIPT

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// let s2: string = vUnknown as string;

// let pageNumber: string = "1";
// let numericPageNumber: number = (pageNumber as unknown) as number;

// console.log(vAny.foo());
// console.log(vUnknown.foo());

// WORKING WITH DOM

// const someElement = document.querySelector(".foo");

// someElement.addEventListener('blur', (event) => {
//     const target = event.target as HTMLInputElement
//     console.log('event', target.value);
// })

// CLASSES IN TYPESCRIPT

// interface UserInterface {
//     getFullName(): string;
// }

// class User implements UserInterface {
//     firstName: string
//     lastName: string
//     readonly unchangeableName: string
//     static readonly maxAge = 50

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.unchangeableName = firstName;
//     }
    
//     changeUnchangeableName(): void {
//         //this.unchangeableName = "foo";
//     }

//     // getFullName(): string {
//     //     return this.firstName + ' ' + this.lastName
//     // }
// }

// class Admin extends User {
//     private editor: string

//     setEditor(editor: string): void {
//         this.editor = editor
//     }

//     getEditor(): string {
//         return this.editor
//     }
// }

// const user = new User('Dylan', 'Lancaster');
// console.log(user.firstName);
// console.log(User.maxAge);

// const admin = new Admin('Foo', 'Bar')
// console.log(admin)

// GENERICS IN TYPESCRIPT

// const searchStr = 'foo'
// const hasSearchedString = any<string>((el: string) => el.includes(searchStr), [
//     'fooooo', 
//     'bar', 
//     'baz',
// ]);

// const addId = <T extends object>(obj: T) => {
//     const id = Math.random().toString(16)
//     return {
//         ...obj,
//         id
//     };
// };

// interface UserInterface<T, V> {
//     name: string;
//     data: T;
//     meta: V;
// }

// const user: UserInterface<{meta: string}, string> = {
//     name: "Dylan",
//     data: {
//         meta: "foo",
//     },
//     meta: "bar",
// };

// const user2: UserInterface<string[]> = {
//     name: "Seth",
//     data: ["foo", "bar", "baz"],
// }

// const result = addId<UserInterface>(user);
// console.log('result', result);

// ENUMS IN TYPESCRIPT

// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }

// console.log(statuses.inProgress);

enum StatusEnum {
    NotStarted = 'notStarted',
    InProgress = 'inProgress',
    Done = 'done',
}

interface Task {
    id: string;
    status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);