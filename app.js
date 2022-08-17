const patientData = document.forms["patients-form"];
const firstName = patientData.querySelector("#firstName");
const lastName = patientData.querySelector("#lastName");
const email = patientData.querySelector("#email");
const gender = patientData.querySelector("#gender");
const visit = patientData.querySelector("#checkbox");
// const submit = patientData.querySelector("#submit");
const update = patientData.querySelector("#update");

const patientsDetails = document.querySelector("#patients-details");

// Add Patient Data to Table
const addPatientsData = (e) => {
  e.preventDefault();
  document.getElementById("patients-details").innerHTML += `<tr>
  <td>${firstName.value} ${lastName.value}</td>
  <td>${email.value}</td>
  <td>${gender.value}</td>
  <td><a href='#'>${visit.checked ? "Yes" : "No"}</a></td>
  <td><button class="edit-btn">Edit</button></td>
  <td><button class="delete-btn">Delete</button></td>
  </tr>`;
  patientData.reset();
};
patientData.addEventListener("submit", addPatientsData);

// Edit patient data on table
const editPatientData = (data) => {
  if (data.target.classList.contains("edit-btn")) {
    // get patient data
    patient = data.target.parentElement.parentElement;

    firstName.value = patient.children[0].innerText.split(" ")[0];
    lastName.value = patient.children[0].innerText.split(" ")[1];
    email.value = patient.children[1].innerText;
    gender.value = patient.children[2].innerText.split(" ");
    patient.children[3].innerText === "Yes"
      ? (visit.checked = true)
      : (visit.checked = false);

    // Update Button
    document.querySelector("#submit").style.display = "none";
    const update = patientData.querySelector("#update");
    update.style.display = "inline-block";
    update.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        firstName.value.trim() === "" ||
        lastName.value.trim() === "" ||
        email.value.trim() === ""
      ) {
        return;
      }

      patient.innerHTML = `<tr>
      <td>${firstName.value} ${lastName.value}</td>
      <td>${email.value}</td>
      <td>${gender.value}</td>
      <td><a href='#'>${visit.checked ? "Yes" : "No"}</a></td>
      <td><button class="edit-btn">Edit</button></td>
      <td><button class="delete-btn">Delete</button></td>
      </tr>`;

      patientData.reset();
      document.querySelector("#submit").style.display = "inline-block";
      document.querySelector("#update").style.display = "none";
    });
  }
};
patientsDetails.addEventListener("click", editPatientData);

//Delete patient data from table
const deletePatientData = (data) => {
  if (data.target.classList.contains("delete-btn")) {
    data.target.parentElement.parentElement.remove();
  }
};
patientsDetails.addEventListener("click", deletePatientData);
