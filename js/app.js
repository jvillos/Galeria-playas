document.addEventListener("DOMContentLoaded", () => {
  // Contenedor de la galería
  const gallery = document.querySelector(".gallery");

  // Imágenes
  const images = [
    {
      filename: "sunset-01",
      description: "Playa1",
      size: "extra-large",
    },
    {
      filename: "sunset-02",
      description: "Playa2",
      size: "between-large-and-xl",
    },
    {
      filename: "sunset-03",
      description: "Playa3",
      size: "between-large-and-xl",
    },
    { filename: "sunset-04", description: "Playa4", size: "large" },
    { filename: "sunset-05", description: "Playa5", size: "large" },
    {
      filename: "sunset-06",
      description: "Playa6",
      size: "extra-large",
    },
    { filename: "sunset-07", description: "Playa7", size: "large" },
    { filename: "sunset-08", description: "Playa8", size: "medium" },
    { filename: "sunset-09", description: "Playa9", size: "large" },
  ];

  //Generar dinámicamente
  images.forEach((img) => {
    const picture = document.createElement("picture");

    // Agregar las versiones optimizadas
    picture.innerHTML = `
    <source srcset="output-adv/${img.filename}-small-1x..jpg 1x, output-adv/${img.filename}-small-2x..jpg 2x" media="(max-width: 480px)">
    <source srcset="output-adv/${img.filename}-medium-1x..jpg 1x, output-adv/${img.filename}-medium-2x..jpg 2x" media="(max-width: 2000px)">
    <source srcset="output-adv/${img.filename}-large-1x..jpg 1x, output-adv/${img.filename}-large-2x..jpg 2x" media="(max-width: 3500px)">
    <source srcset="output-adv/${img.filename}-xlarge-1x..jpg 1x, output-adv/${img.filename}-xlarge-2x..jpg 2x" media="(max-width: 7000px)">
    <img 
      src="output-adv/${img.filename}-large-1x..jpg" 
      alt="${img.description}" 
      loading="lazy"
      class="gallery-image">
  `;

    // Contenedor imagen
    const figure = document.createElement("figure");

    // Agregar la clase para el tamaño
    figure.classList.add(img.size);

    const caption = document.createElement("figcaption");
    caption.textContent = img.description;

    figure.appendChild(picture);
    figure.appendChild(caption);

    // Añadir a la galería
    gallery.appendChild(figure);
  });

  //MODAL
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Función para cerrar el modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Añadir evento a cada imagen de la galería
  document.querySelectorAll(".gallery-image").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
