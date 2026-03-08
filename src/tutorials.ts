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