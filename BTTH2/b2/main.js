let courses = [
  { name: "HTML", complete: false },
  { name: "CSS", complete: false },
  { name: "Basic of javascript", complete: false },
  { name: "Node package Manager (npm)", complete: false },
  { name: "Git", complete: false },
];

function printCourses() {
  courses.forEach((course, index) => {
    console.log(`${index + 1}. ${course.name}`);
    console.log(`Complete: ${course.complete}`);
  });
}

while (true) {
  let input = prompt("Nhap vao chu cai C / R / U / D / E").toUpperCase();

  switch (input) {
    case "C":
      let name = prompt("Nhap ten khoa hoc moi:");
      let status = prompt("Hoan thanh chua? (true/false)").toLowerCase() === "true";
      courses.push({ name: name, complete: status });
      printCourses();
      break;

    case "R":
      printCourses();
      break;

    case "U":
      let updateIndex = Number(prompt("Nhap vi tri khoa hoc muon cap nhat:")) - 1;
      if (updateIndex >= 0 && updateIndex < courses.length) {
        let newName = prompt("Nhap tenmoi:");
        let newStatus = prompt("Hoan thanh chua? (true/false)").toLowerCase() === "true";
        courses[updateIndex].name = newName;
        courses[updateIndex].complete = newStatus;
        printCourses();
      } else {
        console.log("Khong hop le.");
      }
      break;

    case "D":
      let deleteIndex = Number(prompt("Nhap vi tri khoa hoc:")) - 1;
      if (deleteIndex >= 0 && deleteIndex < courses.length) {
        courses.splice(deleteIndex, 1);
        printCourses();
      } else {
        console.log("Khong hople.");
      }
      break;

    case "E":
      console.log("Cam on ban da den voi Rikkei Academy");
      break;

    default:
      console.log("Vui long nhap dung C / R / U / D / E");
  }

  if (input === "E") {
    break;
  }
}
