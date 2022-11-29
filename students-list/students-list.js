const studentListContainer = document.getElementById("students-list");
let studentsRegister = [];

const getStudentsRegister = async () => {
  const response = await fetch("./students-register.json");
  const disorderlyStudentsRegister = await response.json();

  studentsRegister = sortStudentsRegisterByIdentifer(disorderlyStudentsRegister);
  console.log('studentsRegister', studentsRegister)
  generateRegisterList();
};

const generateRegisterList = () => {
  studentsRegister.forEach((student) => {
    studentListContainer.innerHTML += 
      `<div class="register-container">
        <div class="standard-container">
          <h3>NOME</h3>
          <h4>${student.name}</h4>
          <hr class="horizontal-line">
        </div>
        <div class="standard-container about-container">
          <div class="three-row">
            <h3>RA</h3>
            <h4>${student.identifier}</h4>
            <hr class="horizontal-line">
          </div>
          <div class="three-row">
            <h3>GÊNERO</h3>
            <h4>${student.gender}</h4>
            <hr class="horizontal-line">
          </div>
          <div class="three-row">
            <h3>IDADE</h3>
            <h4>${student.age}</h4>
            <hr class="horizontal-line">
          </div>
        </div>
        <div class="standard-container">
          <div>
            <h3>E-MAIL</h3>
            <h4>${student.email}</h4>
            <hr class="horizontal-line">
          </div>
        </div>
        <div>
          <div>
            <h3>ENDEREÇO</h3>
            <h4>${student.address}</h4>
            <hr class="horizontal-line">
          </div>
        </div>
      </div>`;
  });
};

const sortStudentsRegisterByIdentifer = studentsRegisterToSort => {
  return studentsRegisterToSort.sort((nextStudent, previousStudent) => {
    if (nextStudent.identifier > previousStudent.identifier) {
      return 1;
    } else if (nextStudent.identifier === previousStudent.identifier) {
      if (nextStudent.name > previousStudent.name) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
}

getStudentsRegister();
