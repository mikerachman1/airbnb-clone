import { useState } from "react";
import PhotoGallery from "./PhotoGallery";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return <PhotoGallery place={place} setShowAllPhotos={setShowAllPhotos} />;
  }
  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-square object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[0]}
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="cursor-pointer aspect-square object-cover"
              src={"http://localhost:4000/uploads/" + place.photos[1]}
            />
          )}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-square object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos[2]}
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
        Show more photos
      </button>
    </div>
  );
}
