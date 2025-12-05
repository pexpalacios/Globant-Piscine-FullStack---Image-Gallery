import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [dark, setDark] = useState(false);

  const accessKey = "ydaYPE3ltUrx_K35cMlxoHi_xJN1hm7P44_HLale_5o";

  // ---- PETICIÓN A UNSPLASH ----
  const fetchPhotos = (newSearch = false) => {
    const apiUrl = query
      ? `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`
      : `https://api.unsplash.com/photos?page=${page}&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        if (newSearch) {
          setPhotos(results);
        } else {
          setPhotos((prev) => [...prev, ...results]);
        }
      });
  };

  useEffect(() => {
    fetchPhotos(true);
  }, []);

  // ---- BUSCAR NUEVAS FOTOS ----
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchPhotos(true);
  };

  // ---- LOAD MORE ----
  const loadMore = () => {
    setPage((prev) => prev + 1);
    setTimeout(() => fetchPhotos(false), 50);
  };

  return (
    <div className="mode">
      <div className="top-bar">
        <a href="https://unsplash.com/" target="_blank">
        	<img src="https://www.svgrepo.com/show/315538/unsplash.svg" className="logo" alt="Unsplash logo" />
		    </a>
		    <p>Using Unsplash API</p>
        <h1 className="title">Image Gallery</h1>

        <button
          onClick={() => setDark((prev) => !prev)}
          className="px-3 py-1 border rounded dark:border-gray-400">
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

    <div className="main-content">
      <div className="right-content">
        <div className="header">

      <div className="search-bar">
        <form onSubmit={handleSearch} className="mb-6 flex gap-2">
          <input type="text" placeholder="Buscar fotos..." value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button type="submit">
            Search
          </button>
        </form>

        <div className="load-more">
          <button onClick={loadMore} >
            Load More
          </button>
        </div>

        </div>

        <div className="gallery">
          {photos.map((photo: any) => (
            <img key={photo.id} src={photo.urls.small} alt={photo.alt_description || ""}/>
          ))}
        </div>

      </div>
    </div>
    
    <div className="side-bar">
      <div className="avatar"></div>
      <div className="username">Username</div>
      <button className="login-button">Login</button>
    </div>
    </div>
  </div>
  );
}

export default App;
