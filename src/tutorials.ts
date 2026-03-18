console.log('rufai with typescript');

interface studentInfo{
    firstName: string,
    lastName: string,
    studentID: number,
    program: string,
    level: number,
    number: string,
    school: string
    mother: string,
    father: string,
    elementarySchool: string
}

let student: studentInfo = {
    firstName: 'abdul-mumin',
    lastName: 'rufai',
    studentID: 123,
    program: 'B.Sc Computer Science',
    level: 400,
    number: '0245662326',
    school: 'University for Development Studies',
    mother: 'Rukaya Yakubu',
    father: 'Rufai Bawa',
    elementarySchool:'Danfa Methodist JHS'
}
console.log(student);

// type annotation and type inference for different data types
// typeScript is smart in enough to infer the data types for you, it is normally acceptable annotate the type.

let myVarialbe:string = 'to do is to dare';
myVarialbe

let myAge: number = 90;
myAge

let isComingHome: boolean = false;
isComingHome

// code challenge
let name: string = 'rufai abdul-mumin';
name

let myNumber: number = 1000;
myNumber


let myBoolean: boolean = 2 > 9;
myBoolean


//unions and literals

// unions types
let myData: string | number = 20
myData = 'go'
myData

let myThings: boolean | string | number = true;
myThings = false
myThings = 'come'
myThings

// literals
let myRequest: 'idle' | 'processing' | 'completed' = 'idle';
myRequest = 'completed'
myRequest



const books = ['1997', 'coming home', 'kila'];

let foundBook: string| undefined; // by default variable are undefine

for (let book of books) {
    if (book === '1997') {
        foundBook = book
        foundBook.length
        break;
    }
}
console.log(foundBook?.length);

// arrays and objects

let rufaiArray:(string| number)[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 200];
rufaiArray.push(500);
console.log(rufaiArray);

let array1: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
array1.push('rufai')

// objects
let rufaiObject: { name: string; tele: number; sex:string} = {
    name: 'rufai',
    tele: 90,
    sex: 'male'

}
rufaiObject.name

// functions and parameter
function myFunction(name:string) { 
    console.log(`hello ${name.toUpperCase()}`);
    
};
myFunction('mumin')
//myFunction(true)

function calculateDiscount(price: number): number {
    return price *0.1
};
//calculateDiscount('mumin')
calculateDiscount(90)

// functions and parameter challenge

const familyMembers: string[] = ['rufai', 'rukaya', 'bintu', "ibrahim", 'mumin'];


function checkForFamiltyMember(name:string):boolean { 
    return familyMembers.includes(name)
};

let familyMember: string = 'kaka';
if (checkForFamiltyMember(familyMember)) {
    console.log(`${familyMember} is in the list`);
    
} else {
    console.log(`${familyMember} is not in the list`);
    
};

// optional and default parameter in function

// optional parameter
function discountPrice(price:number, discount?:number): number { 
    return price - (discount || 0)
};

let finalPrice = discountPrice(100, 10);
console.log(finalPrice);

let finalPrice1 = discountPrice(900);
console.log(finalPrice1);

// default paramter
function footballScores(scoreWithOutPenalty: number, penaltyScores: number= 0): number {
    return scoreWithOutPenalty - penaltyScores
};

let scoreWithOutPenalty = footballScores(100);
console.log(scoreWithOutPenalty);

let scoreWithPenalty = footballScores(100, 5);
console.log(scoreWithPenalty);

// rest parameter
function restParameter(message:string, ...numbers:number[]):string { 
    const doubleNumbers = numbers.map((num) => num * 2);
    console.log(doubleNumbers);
    
    let addNumbers = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);

    return `${message.toLocaleUpperCase()} ${addNumbers}`
};
console.log(restParameter('mumin is learning typeScript: ', 1, 2, 3, 4, 5));

// void functions ir function that does not return a value.
function doSomething(message:string):void {
    console.log(message.toLocaleUpperCase());
};

doSomething('this is a void function')

// challenges and typeof

function processSomething(input: string | number) { 
    if (typeof input === 'number') {
        console.log(input * 2); 
    } else {
        console.log(input.toLocaleLowerCase());
        
    }
    
};

processSomething(10);
processSomething('something');

// object as a parameter of a function
function objectParameter({ id }: { id: number }): { id: number; isActive: boolean} { 
    return { id, isActive: id % 2 === 0};
};

let parameter1 = objectParameter({id: 1});
let parameter2 = objectParameter({ id: 4 });
console.log(parameter1, parameter2);


// alternative of object as a parameter

function createStudent(student: { id: number; name:string}):void { 
    console.log(student.name.toLocaleUpperCase());
    
};
const newStudent = {
    id: 57,
    name: 'abdul-mumin'

}
createStudent(newStudent)

// access property checks in object as a parameter

function createStudent1(student: { id: number; name:string}):void { 
    console.log(student.name.toLocaleUpperCase());
    
};
const newStudent1 = {
    id: 57,
    name: 'abdul-mumin',
    email: 'rufai@gmail.com'

}
//TypeScript only performs excess property checks on object literals where 
// they're used, not on references
//  to them.
createStudent1(newStudent1);
createStudent1({ id: 10, name: 'this is mumin' });

// challenge 
function processData(input: number | string, config: { reverse: boolean } = { reverse: false }

): number | string{ 
    if (typeof input === 'number') {
            return input * input
    } else {
        return config.reverse ? input.toUpperCase().split('').reverse().join('') :
                input.toUpperCase()
        }
};
console.log(processData(15));
console.log(processData('abdul-mumin rufai'));
console.log(processData('abdul-mumin rufai', {reverse:true}));

// Type Alias

type User = { id: number; name: string; isActive: boolean }; // type alias in action

const john: User  = {
    id: 1,
    name: 'john',
    isActive: true,
};
console.log(john);

  
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};
console.log(susan);

  
function createUser(user: User): User {

    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
}
console.log(createUser({id: 9, name: 'mumin', isActive:true}));

type StringOrNumber = string | number;
let newValue: StringOrNumber;

newValue = 'mumin';
newValue = 9;
console.log(newValue);

type Theme = 'light' | 'dark';

let newTheme: Theme;
newTheme = 'dark'
console.log(newTheme);

function myTheme(t:Theme): string {
    return t;
};
myTheme('light')
console.log(myTheme('light'));

// type alias challenge
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffMember(staff:Staff) { 
    if ('department' in staff) {
        console.log(`${staff.name} is an employee in the ${staff.department}`);
    } else {
        console.log(`${staff.name} is an manager with ${staff.employees.length} employees`);
    }
};

const rufai: Employee = { id: 15, name: 'Rufai', department: 'software development' };
const abdul: Employee = { id: 15, name: 'AbdulMumin', department: 'software development' };
const mumin: Manager = { id: 15, name: 'Mumin', employees: [rufai, abdul] };

printStaffMember(abdul);
printStaffMember(mumin);

// type intersection
type interSection = { studentId: number; lastName: string; firstName: string };
type addType = interSection & { school: string } // type intersection here

let intersection1: interSection;

intersection1 = {
    studentId: 90,
    lastName: 'Rufai',
    firstName: 'Abdul-Mumin'
}
let intersection2: interSection & addType // type intersection here
intersection2 = {
    studentId: 10,
    lastName: 'Rufai',
    firstName: 'Abdul-Mumin',
    school: 'University for Development Studies'
};
console.log(intersection1, intersection2);

// interface
interface Book { 
    readonly isBk: number;
    author: string;
    title: string;
    genere?: string;
};

const litereture: Book = {
    isBk: 345,
    author: 'Efo Kojo Mawugbe',
    title: 'In the chest of a woman',
    genere: 'litereture',
    
}
//litereture.isBk = 23 can't re-assign to isBk because it readonly
//litereture.title='new title' // this is allowed
let printBook = litereture
console.log(printBook);

// method in interface
interface InterfaceMethod{
    readonly isBk: number;
    author: string;
    title: string;
    genere?: string;
    // methods
    printAuthor(): void;
    printTitle(message: string): string;
}
const litereture1: InterfaceMethod = {
    isBk: 345,
    author: 'Efo Kojo Mawugbe',
    title: 'In the chest of a woman',
    genere: 'litereture',
    //methods
    printAuthor() {
        console.log(this.author);
    },
    printTitle(message) {
        return `${this.title} ${message}`
    },
};
litereture1.printAuthor();
let result = litereture1.printTitle('is very interesting book');
console.log(result);

// interface challenge
interface Computer { 
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    upgradeRam(newRam: number): number;
};

const laptop: Computer = {
    id: 90,
    brand: 'Toshiba',
    ram: 15,
    upgradeRam(newRam) { 
        return this.ram += newRam;
    },
};
laptop.storage = 256; // storage is optional so i now added it here.
console.log(laptop.upgradeRam(10));
console.log(laptop);

// interface merging

interface Person { 
    name: string;
    id: number;
    printPersonDetails(): void;
};

interface Person { 
    homeTown: string; // merging in action
};

const person:Person = {
    name: 'Mumin',
    id: 66,
    homeTown: 'Kumbungu', // usage here
    printPersonDetails() {
        `name: ${this.name} id: ${this.id} homeTown: ${this.homeTown}`   
    },
};


console.log(`name: ${person.name} id: ${person.id} homeTown: ${person.homeTown}`);

// interface inheritance

interface Hustler { 
    name: string;
    age: number;
    company?: string;
    printHustlerDetails(): string | number;
};


const hustler: Hustler = {
    name: 'Mumin',
    age: 100,
    company: 'we are construction',
    printHustlerDetails() {
        return `name: ${this.name} age: ${this.age} company: ${this.company}`
    }
};

interface HustlerStudent extends Hustler { 
    school: string;
    studentId: number;
};

// extends the interface here ie inheritance
const hustlerStudent: HustlerStudent = {
    age: 90,
    company: 'netflixs',
    school: 'University for Development Studies',
    studentId: 99,
    name:'Rufai',
    printHustlerDetails() {
        return `name: ${this.name} age: ${this.age} company: ${this.company} school: ${this.school}   `
    }
};

console.log(hustler.printHustlerDetails(), hustler);
console.log(hustlerStudent.printHustlerDetails());
console.log(hustlerStudent);

// interface inheritance challenge 1
function myWorkers(): Manager1 | DogOwner | Person1{
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return person1;

    } else if (randomNumber < 0.66) {
        return dogOwner;

    } else {
        return manager1;
    }
}

interface Person1 { 
    name: string;
};

const person1: Person1 = {
    name:'Abdul-Mumin'
};

interface DogOwner extends Person1 {
    dogName: string;
};

const dogOwner: DogOwner = {
    name: 'Rufai',
    dogName:'aki'
};

interface Manager1 extends Person1 { 
    managePeople(): void;
    deleteTask(): void;
};

const manager1: Manager1 = {
    name: 'Bawa',
    managePeople() {
        console.log(`name: ${this.name}`);
    },
    deleteTask() {
        console.log('I can delete who i want');
    }
};

type Employee1 = Person1 | Manager1 | DogOwner;
const employee: Employee1 = myWorkers();

// type predicate
function isManager(object: Person1 | Manager1 | DogOwner): object is Manager1{
    return 'managePeople' in object;
};

if (isManager(employee)) {
    employee.deleteTask();
};

// Tuples and Enums
// tuples are used for fixed arrays ie it values cannot be changed
let tuples: [string, number] = ['mumin', 20];
tuples

let data: readonly [number, string, number?] = [15, 'May', 1997];
//tuples can also be optional
//data.push('barcelona')  gotcha here althogh the array is fixed but push modifies is. so we use the read only

function myTuple(): [number, string, number] { 
    return [15, 'May', 1997];
};

/* this is allowed due to the reversed nature of number values
enum NumericValue { 
    value = 1
};

let myNumericValue: NumericValue = 1;
console.log(myNumericValue);

this is not allowed
enum StringValue { 
    value = 'barcelona'
};

let myStringValue: StringValue = 'barcelona';
console.log(myStringValue);
 */

let tupleData = myTuple();
console.log(tupleData);
console.log(tupleData[0]);
console.log(tupleData[1]);
console.log(tupleData[2]);
console.log(data);

// Enums
// enums properties can not have a values of type string
enum EnumServerResponses {
    IDLE=200,
    PROCESSING=99,
    COMPLETED= 'mumin',
}
console.log(EnumServerResponses);

Object.values(EnumServerResponses).forEach((value) => {
    if (typeof value === 'number') {
        console.log(value);
    }
})

Object.values(EnumServerResponses).forEach((value) => {
        console.log(value);
})

interface ServerResponse { 
    results: EnumServerResponses;
    firstName: string
};

//
function myEnumFunction(): ServerResponse { 
    return {
        results: EnumServerResponses.COMPLETED,
        firstName: 'Abdul-Mumin'
    }
};

const enumVariable: ServerResponse = myEnumFunction();
console.log(enumVariable);

// Tuples and Enums Challenge

enum UserRole { 
    ADMIM,
    MANAGER,
    EMPLOYEE,
};

console.log(UserRole);

type EnumUser = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
};
const object: EnumUser = {
    id: 90,
    name: 'Abdul-Mumin Rufai',
    role: UserRole.MANAGER,
    contact:['rufai.abdulmumin@hotmail.com', '0245662326'],
};

function createEnumUser(object:EnumUser):EnumUser { 
    return object;
};
let finalEnum: EnumUser = createEnumUser(object);
console.log(finalEnum);
