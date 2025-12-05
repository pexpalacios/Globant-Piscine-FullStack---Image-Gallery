const accessKey = "ydaYPE3ltUrx_K35cMlxoHi_xJN1hm7P44_HLale_5o";

// Búsqueda de fotos
const query = "nature";

fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`)
  .then(res => res.json())
  .then(data => {
    const photosDiv = document.getElementById("main");
    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Foto de Unsplash";
      photosDiv.appendChild(img);
    });
  })
  .catch(err => console.error("Error:", err));