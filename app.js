const form = document.querySelector("#patients-form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const visit = document.querySelector("#visit");

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

  // Display Success alert
  const successAlert = document.querySelector(".success-alert");
  successAlert.style.display = "block";

  console.log("working");
  // Set Success alert display to none
  function clearSuccessAlert() {
    const successAlert = document.querySelector(".success-alert");
    successAlert.style.display = "none";
  }

  //Timeout
  setTimeout(() => {
    clearSuccessAlert();
  }, 01000);
  form.reset();
};
form.addEventListener("submit", addPatientsData);

const editPatient = document.querySelector("#patients-details");
const update = document.querySelector("#update");

// Edit patient data on table
const editPatientData = (data) => {
  if (data.className === "edit-btn") {
    // get patient data
    patient = data.parentElement.parentElement;

    firstName.value = patient.children[0].innerText.split(" ")[0];
    lastName.value = patient.children[0].innerText.split(" ")[1];
    email.value = patient.children[1].innerText.split(" ");
    gender.value = patient.children[2].innerText.split(" ");
    visit.value =
      patient.children[3].innerText === "Yes"
        ? (visit.checked = true)
        : (visit.checked = false);

    // Update Button
    document.querySelector("#submit").style.display = "none";
    const update = document.querySelector("#update");
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
      form.reset();
      document.querySelector("#submit").style.display = "inline-block";
      document.querySelector("#update").style.display = "none";

      // const delAlert = document.querySelector(".delete-alert");
      // delAlert[0].style.display = "none";

      // Display Update Alert
      const updateAlert = document.querySelector(".update-alert");
      updateAlert.style.display = "block";

      // Set Update alert display to none
      function recordUpdated() {
        const updateAlert = document.querySelector(".update-alert");
        updateAlert.style.display = "none";
      }

      // Set Timeout
      setTimeout(() => {
        recordUpdated();
      }, 01000);
    });
  }
};
editPatient.addEventListener("click", editPatientData);

const deletePatient = document.querySelector(".delete-btn");

// for (let btn of deletePatient) {
//   console.log(".delete-btn");
// }

// for (let btn of deletePatient) {
//   btn.document.querySelectorAll(".delete-btn") = deletePatient;
// }

//Delete patient data from table
const deletePatientData = (data) => {
  if (data.target.className === "delete-btn") {
    data.target.parentElement.parentElement.remove();

    console.log("working");
  }

  // Display Delete Alert
  const deleteAlert = document.querySelector(".delete-alert");
  deleteAlert.style.display = "block";

  // Set delete alert to none
  function recordDeleted() {
    document.querySelector(".delete-alert").style.display = "none";
  }

  //Set Timeout
  setTimeout(() => {
    recordDeleted();
  }, 1000);
  // form.reset();
};
deletePatient.addEventListener("click", deletePatientData);
