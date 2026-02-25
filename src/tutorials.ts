console.log('rufai with typescript');

interface studentInfo{
    firstName: string,
    lastName: string,
    studentID: number,
    program: string,
    level:number

}

let student: studentInfo = {
    firstName: 'abdul-mumin',
    lastName: 'rufai',
    studentID: 123,
    program: 'B.Sc Computer Science',
    level:400
}

console.log(student);