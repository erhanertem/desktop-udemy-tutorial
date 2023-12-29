// function warnUserOnce() {
//   if (!localStorage.getItem("shownWarning")) {
//     console.log("WARNING!!!! WE ARE SHUTTING DOWN OUR ENTIRE APP IN 2 WEEKS!!");
//   }
//   localStorage.setItem("shownWarning", "true");
// }

// warnUserOnce();

const form = document.querySelector("#checkoutForm");
form.addEventListener("input", (e) => {
  const { name, value } = e.target;
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  formData[name] = value;
  sessionStorage.setItem("formData", JSON.stringify(formData));
});

const populateForm = () => {
  const formData = JSON.parse(sessionStorage.getItem("formData")) ?? {};
  for (let field in formData) {
    form.elements[field].value = formData[field];
  }
};

populateForm();
