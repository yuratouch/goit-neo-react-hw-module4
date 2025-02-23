import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import fetchImages from "/src/api/unsplash-api";
import Loader from "/src/components/Loader/Loader";
import SearchBar from "/src/components/SearchBar/SearchBar";
import ImageGallery from "/src/components/ImageGallery/ImageGallery";
import ErrorMessage from "/src/components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "/src/components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "/src/components/ImageModal/ImageModal";

function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (images.length <= 12) return;
    const timer = setTimeout(() => {
      window.scrollBy({
        top: 680,
        left: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [images]);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    setError(false);

    async function loadImages() {
      try {
        const images = await fetchImages(query, page);

        if (!images.length) {
          setError("No images found. Please try another search query.");
        }
        setImages((prevImages) => [...prevImages, ...images]);
      } catch {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  function searchHadle(query) {
    setPage(1);
    setImages([]);
    setQuery(query);
  }

  function loadMoreHandle() {
    setPage((prevPage) => prevPage + 1);
  }

  function openModal(image) {
    setIsModalOpen(true);
    setSelectedImage(image);
  }

  return (
    <>
      <SearchBar onSubmit={searchHadle} />
      <ImageGallery images={images} modalHandler={openModal} />
      {images.length > 0 && !isLoading && !error ? (
        <LoadMoreBtn loadMoreHandle={loadMoreHandle} />
      ) : null}
      {error && <ErrorMessage errorMessage={error} />}
      <Loader isLoading={isLoading} />
      <ImageModal
        images={images}
        isOpen={isModalOpen}
        selectedImage={selectedImage}
        onClose={() => setIsModalOpen(false)}
      />
      <Toaster toastOptions={{ duration: 3000, position: "top-right" }} />
    </>
  );
}

export default App;
