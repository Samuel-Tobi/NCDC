const patientData = document.forms["patients-form"];
const firstName = patientData.querySelector("#firstName");
const lastName = patientData.querySelector("#lastName");
const email = patientData.querySelector("#email");
const gender = patientData.querySelector("#gender");
const visit = patientData.querySelector("#checkbox");
const submit = patientData.querySelector("#submit");
const update = patientData.querySelector("#update");

const patientsDetails = document.querySelector("#patients-details");

// Add Patient Data to Table
const addPatientsData = (e) => {
  e.preventDefault();
  document.getElementById("patients-details").innerHTML += `<tr>
  <td>${firstName.value} ${lastName.value}</td>
  <td>${email.value}</td>
  <td>${gender.value}</td>
  <td><a href="#">No</a></td>
  <td><button class="edit-btn">Edit</button></td>
  <td><button class="delete-btn">Delete</button></td>
  </tr>`;
};
patientData.addEventListener("submit", addPatientsData);

// Edit patient data on table
const editPatientData = () => {};

//Delete patient data from table
const deletePatientData = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.remove();
  }
};
patientsDetails.addEventListener("click", deletePatientData);
