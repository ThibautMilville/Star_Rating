// SELECT ALL THE STARS AND PUT THEM IN A NODELIST
const stars = document.querySelectorAll('.stars i');

// LOOP THROUGH THE STARS NODELIST
stars.forEach((star, index1) => {
  // EVENT LISTENER FOR A CLICK ON A STAR
  star.addEventListener("click", () => {
    // ADD THE ACTIVE CLASS TO THE STAR THAT WAS CLICKED AND ALL THE STARS BEFORE IT
    stars.forEach((star, index2) => {
      index2 <= index1 ? star.classList.add("active") : star.classList.remove("active");
    })
  })
})