const next_btn = document.querySelectorAll("#next");
const prev_btn = document.querySelectorAll("#return");
const submit = document.getElementById("formStepper");
const form_steps = document.querySelectorAll(".form-elements");
const progressSteps = document.querySelectorAll(".stepper");

let formStepNum = 0;

next_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (validate(formStepNum)) {
      formStepNum++;
      updateFormSteps();
      updateProgressBar();
      updateProgressBarDone();
    }
  });
});

prev_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepNum--;
    updateFormSteps();
    updateProgressBar();
    updateProgressBarDone();
  });
});

submit.addEventListener("submit", (event) => {
  if (!validate(formStepNum)) {
    event.preventDefault();
  }
});

function updateFormSteps() {
  form_steps.forEach((formStep) => {
    formStep.classList.contains("active") &&
      formStep.classList.remove("active");
  });

  form_steps[formStepNum].classList.add("active");
}

function updateProgressBar() {
  progressSteps.forEach((progres, idx) => {
    if (idx < formStepNum + 1) {
      progres.classList.add("active");
    } else {
      progres.classList.remove("active");
    }
  });
}

function updateProgressBarDone() {
  progressSteps.forEach((progres, idx) => {
    if (idx < formStepNum) {
      progres.classList.add("done");
    } else {
      progres.classList.remove("done");
    }
  });
}

function validate(idx) {
  const stepContent = form_steps[idx];
  /*   console.log(form_steps[0]); */
  const inputs = stepContent.querySelectorAll(
    " #contactName,#contactEmail,#contactNumber,#companyName,#branch_numbers"
  );
  let isValid = true;

  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling.nextElementSibling;
    if (input.value.trim() === "") {
      isValid = false;
      input.classList.add("error");
      input.nextElementSibling.classList.add(
        "peer-placeholder-shown:top-[30%]"
      );
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.classList.remove("hidden");
      }
    } else {
      input.classList.remove("error");
      input.nextElementSibling.classList.add("peer-placeholder-shown:top-1/2");
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.classList.add("hidden");
      }
    }
  });
  return isValid;
}
