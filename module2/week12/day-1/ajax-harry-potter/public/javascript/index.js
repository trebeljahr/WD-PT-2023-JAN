const hogwartsAPI = new APIHandler("http://localhost:8000");
const parentContainer = document.querySelector(".characters-container");
window.addEventListener("load", () => {
  //fetch all students
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      console.log("fetch all clicked");
      parentContainer.innerHTML = "";
      const response1 = await hogwartsAPI.getAllStudents("Gryffindor");
      const response2 = await hogwartsAPI.getAllStudents("Hufflepuff");
      const response3 = await hogwartsAPI.getAllStudents("Ravenclaw");
      const response4 = await hogwartsAPI.getAllStudents("Slytherin");
      const hogwarts = {
        Gryffindor: response1,
        Hufflepuff: response2,
        Ravenclaw: response3,
        Slytherin: response4,
      };
      console.log("Here is Hogwarts", hogwarts);

      for (let i = 0; i < hogwarts.Gryffindor.length; i++) {
        let currentStudent = hogwarts.Gryffindor[i];
        const newDiv = document.createElement("div");
        newDiv.classList.add("character-info");
        newDiv.innerHTML = `
        <div class="name">Student Name: ${currentStudent.name}</div>
        <div class="occupation">Are they a Wizard: ${currentStudent.wizard}</div>
        <div class="weapon">Student Patronous: ${currentStudent.patronus}</div>
        `;
        parentContainer.appendChild(newDiv);
      }
    });

  //fetch only Gryffindor students
  document
    .getElementById("fetch-Grffindor")
    .addEventListener("click", async (event) => {
      console.log("Gryffindor clicked");
    });
  //fetch only Slytherin students
  document
    .getElementById("fetch-Slytherin")
    .addEventListener("click", async (event) => {
      console.log("Slytherin clicked");
    });
  //fetch only Hufflepuff students
  document
    .getElementById("fetch-Hufflepuff")
    .addEventListener("click", async (event) => {
      console.log("Hufflepuff clicked");
    });
  //fetch only Ravenclaw students
  document
    .getElementById("fetch-Ravenclaw")
    .addEventListener("click", async (event) => {
      console.log("Ravenclaw clicked");
    });
  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const idInput = document.querySelector("#characterId").value;
      const houseInput = document.querySelector("#characterHouse").value;
      const oneStudent = await hogwartsAPI.getOneStudent(houseInput, idInput);
      console.log("One student found", oneStudent);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.querySelector("#new-student-name").value;
      const patronus = document.querySelector("#new-student-patronus").value;
      const wizard = document.querySelector("#new-student-wizard").checked;
      const studentToEnroll = { name, patronus, wizard };
      const enrolledStudent = await hogwartsAPI.addOneStudent(
        "Gryffindor",
        studentToEnroll
      );
      console.log("Student successfully enrolled", enrolledStudent);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {});
});
