document.addEventListener(
  "DOMContentLoaded",
  () => {
    const deleteBtn = document.querySelector(".delete");
    console.log("lab-express-cinema JS imported successfully!");
    deleteBtn.addEventListener("click", () => {
      console.log("clicked");
    });
  },
  false
);
