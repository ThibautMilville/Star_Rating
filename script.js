// SELECT ALL THE STARS AND PUT THEM IN A NODELIST
const stars = document.querySelectorAll('.stars i');

// LOOP THROUGH THE STARS NODELIST
stars.forEach((star, index1) => {
  // EVENT LISTENER FOR A CLICK ON A STAR
  star.addEventListener("click", () => {
    // ADD THE ACTIVE CLASS TO THE STAR THAT WAS CLICKED AND ALL THE STARS BEFORE IT
    stars.forEach((star, index2) => {
      // IF THE INDEX OF THE CLICKED STAR IS <= TO THE INDEX OF THE CURRENT STAR IN THE LOOP, ADD THE ACTIVE CLASS
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    })
  })
})