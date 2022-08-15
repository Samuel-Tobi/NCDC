// const patientData = document.forms["patient-form"];
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const visit = document.querySelector("#checkbox");
const submit = document.querySelector("#submit");

// Add Patient Data to Table
const addPatientsData = (e) => {
  e.preventDefault();
  document.getElementById("patients-details").innerHTML += `<tr>
  <td>${firstName.value} ${lastName.value}</td>
  <td>${email.value}</td>
  <td>${gender.value}</td>
  <td><a href="#">No</a></td>
  <td><button class="btn edit">Edit</button></td>
  <td><button class="btn delete">Delete</button></td>
  </tr>`;

  console.log("working");
};

submit.addEventListener("click", addPatientsData);

// Edit patient data on table
const editPatientData = () => {};
