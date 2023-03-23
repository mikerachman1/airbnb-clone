export default function PhotoGallery({ place, setShowAllPhotos }) {
  return (
    <div className="absolute inset-0 bg-black  min-h-screen">
      <div className="bg-black p-8 grid gap-8">
        <div>
          <h2 className="mr-48 text-3xl text-white">Photos of {place.title}</h2>
          <button
            onClick={() => setShowAllPhotos(false)}
            className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
            Close Photos
          </button>
        </div>
        {place?.photos?.length > 0 &&
          place.photos.map((photo, index) => (
            <div key={index}>
              <img
                className="rounded-2xl"
                src={"http://localhost:4000/uploads/" + photo}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}
