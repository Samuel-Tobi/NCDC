const patientData = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");

const update = document.querySelector("#update");

// setup edit buttons
const setupEditButtons = () => {
  const editBtns = document.querySelectorAll(".edit-btn");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", editPatientData);
  });
};

// setup delete buttons
const setupDeleteButtons = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", deletePatientData);
  });
};

// Add Patient Data to Table
function addPatientsData(e) {
  e.preventDefault();
  document.getElementById("patients-table").innerHTML += `
  <tbody>
    <tr>
    <td>${firstName.value} ${lastName.value.toUpperCase()}</td>
    <td>${email.value}</td>
    <td>${gender.value}</td>
    <td>${visit.checked ? "Yes" : "No"}</td>
    <td><button class="edit-btn">Edit</button></td>
    <td><button class="delete-btn">Delete</button></td>
    </tr>
  </tbody>`;

  document.getElementById("patients-table").style.visibility = "visible";

  // Display Success alert
  const successAlert = document.querySelector(".success-alert");
  successAlert.style.display = "inline-block";

  setupEditButtons();
  setupDeleteButtons();

  // Set Success alert display to none
  function clearSuccessAlert() {
    const successAlert = document.querySelector(".success-alert");
    successAlert.style.display = "none";
  }
  //Timeout
  setTimeout(() => {
    clearSuccessAlert();
  }, 01000);
  patientData.reset();
}
patientData.addEventListener("submit", addPatientsData);

// Edit patient data on table
function editPatientData(data) {
  if (data.target.className === "edit-btn") {
    // get patient data
    patient = data.target.parentElement.parentElement;

    firstName.value = patient.children[0].innerText.split(" ")[0];
    lastName.value = patient.children[0].innerText.split(" ")[1];
    email.value = patient.children[1].innerText;
    gender.value = patient.children[2].innerText.split(" ");
    patient.children[3].innerText === "Yes"
      ? (visit.checked = true)
      : (visit.checked = false);
  }

  // show update button, hide submit button
  document.querySelector("#update").style.display = "block";
  document.querySelector("#submit").style.display = "none";

  // update button function
  const update = document.querySelector("#update");
  update.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      firstName.value.trim() === "" ||
      lastName.value.trim() === "" ||
      email.value.trim() === "" ||
      gender.value.trim() === "" ||
      visit.value.trim() === ""
    ) {
      return;
    }
    patient.innerHTML = `<tr>
      <td>${firstName.value} ${lastName.value.toUpperCase()}</td>
      <td>${email.value}</td>
      <td>${gender.value}</td>
      <td>${visit.checked ? "Yes" : "No"}</td>
      <td><button class="edit-btn">Edit</button></td>
      <td><button class="delete-btn">Delete</button></td>
      </tr>`;

    patientData.reset();
    document.querySelector("#submit").style.display = "inline-block";
    document.querySelector("#update").style.display = "none";

    setupEditButtons();
    setupDeleteButtons();

    // Update alert
    const updateAlert = document.querySelector(".update-alert");
    updateAlert.style.display = "block";

    function clearUpdateAlert() {
      const updateAlert = document.querySelector(".update-alert");
      updateAlert.style.display = "none";
    }
    // set timeout
    setTimeout(() => {
      clearUpdateAlert();
    }, 01000);
    patientData.reset();
  });
}
setupEditButtons();

//Delete button
const deletePatientData = (data) => {
  if (data.target.className === "delete-btn") {
    data.target.parentElement.parentElement.parentElement.remove();
  }

  // if (data.target.className === "delete-btn" && data.target < 2) {
  //   data.target.parentElement.parentElement.parentElement.parentElement.remove();
  // } else {
  //   // data.target.parentElement.parentElement.remove();
  // }
  // document.getElementById("patients-table").style.visibility = "hidden";

  // Set delete alert
  const deleteAlert = document.querySelector(".delete-alert");
  deleteAlert.style.display = "block";

  //  Set delete alert to none
  function recordDeleted() {
    const deleteAlert = document.querySelector(".delete-alert");
    deleteAlert.style.display = "none";
  }

  //Set Timeout
  setTimeout(() => {
    recordDeleted();
  }, 1000);
  patientData.reset();
};
setupDeleteButtons();
