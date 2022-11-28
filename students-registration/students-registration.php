<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  function registerStudent($registerFileName) {
    if (file_exists("$registerFileName")) {
      $actualStudentsRegisters = file_get_contents("$registerFileName");
      $studentsRegisterObject = json_decode($actualStudentsRegisters, true);

      $studentsFields = array(
        'name' => $_POST['student-name'],
        'email' => $_POST['student-email'],
        'identifier' => $_POST['student-identifier'],
        'gender' => $_POST['student-gender'],
        'age' => $_POST['student-age'],
        'address' => $_POST['student-address'],
      );

      $studentsRegisterObject[] = $studentsFields;
      return json_encode($studentsRegisterObject);
    }
    else {
      $newStudentRegister = array();
      $newStudentRegister[] = array(
        'name' => $_POST['student-name'],
        'email' => $_POST['student-email'],
        'identifier' => $_POST['student-identifier'],
        'gender' => $_POST['student-gender'],
        'age' => $_POST['student-age'],
        'address' => $_POST['student-address'],
      );
      echo "file not exist<br/>";
      return json_encode($newStudentRegister);
    }
  }

  $fileName = './../students-list/students-register.json';
  file_put_contents("$fileName", registerStudent($fileName));
}
?>  