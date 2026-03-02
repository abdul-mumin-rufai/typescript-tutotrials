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