class APIHandler {
  constructor(url) {
    this.BASE_URL = url;
  }
  async getAllStudents(house) {
    const allStudents = await axios(`${this.BASE_URL}/${house}`);
    return allStudents.data;
  }
  async getOneStudent(house, id) {
    const response = await fetch(`${this.BASE_URL}/${house}/${id}`);
    const student = await response.json();
    return student;
  }

  async addOneStudent(house, newStudent) {
    //axios example
    // const addedStudent = await axios.post(
    //   `${this.BASE_URL}/${house}`,
    //   newStudent
    // );'

    //fetch example
    const response = await fetch(`${this.BASE_URL}/${house}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
    const addedStudent = await response.json();
    console.log("here is the added student", addedStudent);
    return addedStudent.data;
  }

  async updateOneStudent(house, id, newInformation) {}

  async expellOneStudent(house, id) {}
}
