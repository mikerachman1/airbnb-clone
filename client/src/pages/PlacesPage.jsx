import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";

export default function PlacesPage() {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState();
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new Place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-xl mt-4">Title</h2>
            <input
              type="text"
              placeholder="title, for example: My lovely apartment"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h2 className="text-xl mt-4">Address</h2>
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <h2 className="text-xl mt-4">Photos</h2>
            <PhotosUploader
              addedPhotos={addedPhotos}
              setAddedPhotos={setAddedPhotos}
              photoLink={photoLink}
              setPhotoLink={setPhotoLink}
            />
            <h2 className="text-xl mt-4">Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h2 className="text-xl mt-4">Perks</h2>
            <Perks perks={perks} setPerks={setPerks} />
            <h2 className="text-xl mt-4">Extra Info</h2>
            <textarea
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
            <h2 className="text-xl mt-4">Check in & out time</h2>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb1">Check in time</h3>
                <input
                  type="text"
                  placeholder="16:00"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb1">Check out time</h3>
                <input
                  type="text"
                  placeholder="11:00"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb1">Max number of guests</h3>
                <input
                  type="number"
                  placeholder="6"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </div>
            </div>
            <button className="primary mt-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
