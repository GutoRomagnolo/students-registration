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
        <div class="name-container">
          <h3>Nome</h3>
          <h4>${student.name}</h4>
        </div>
        <div class="about-container"
          <div class="identifier-container"
            <h3>RA</h3>
            <h4>${student.identifier}</h4>
          </div>
          <div class="gender-container"
            <h3>Gênero</h3>
            <h4>${student.gender}</h4>
          </div>
          <div class="age-container"
            <h3>Idade</h3>
            <h4>${student.age}</h4>
          </div>
        </div>
        <div class="email-address-container"
          <div class="email-container"
            <h3>Email</h3>
            <h4>${student.email}</h4>
          </div>
          <div class="address-container"
            <h3>Endereço</h3>
            <h4>${student.address}</h4>
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
