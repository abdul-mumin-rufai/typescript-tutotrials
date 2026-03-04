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
