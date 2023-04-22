console.log("Hello there");

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
  console.log("Click");
  fetch("/logout", { method: "POST", redirect: "follow" });
});
