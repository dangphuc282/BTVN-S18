let student = {
id : 1,
name: "Nguyen Van A",
gender: "nam",
age: 20,
mark: 8
};

let newStudent = {
  id: 2,
  name: "Tran Thi B",
  gender: "nu",
  age: 22,
  mark: 9
}

let students = [student, newStudent];
let topStudent = students[0];
for(let i = 0;i <students.length; i++ ){
  if(students[i].mark > topStudent.mark){
    topStudent = students[i];
  }
}
console.log("Hoc sinh co diem cao nhat");

console.log(`ID:`, topStudent.id);
console.log(`name:`, topStudent.name);
console.log(`Gioi Tinh:`, topStudent.gender);
console.log(`Tuoi:`, topStudent.age);
console.log(`Diem:`, topStudent.mark);









