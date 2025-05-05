// Array to store student objects
let students = [
  { name: "Felix", age: 20 },
  { name: "Nova", age: 21 }
];

// Function to display students
function renderStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${student.name}, Age: ${student.age}`;
    list.appendChild(li);
  });
}

function addStudent() {
  // Adding a new student with dummy data
  let newStudent = { name: "Newbie", age: 18 };
  students.push(newStudent);
  renderStudents();
}

function removeLastStudent() {
  students.pop(); // Remove last student
  renderStudents();
}

// Initial render
renderStudents();