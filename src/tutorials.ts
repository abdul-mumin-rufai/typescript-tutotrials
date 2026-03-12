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