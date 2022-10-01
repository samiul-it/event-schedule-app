import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [eventData, setEventData] = useState([]);
  const eventNameRef = useRef();
  const hostNameRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const locationRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const eventName = eventNameRef.current.value;
    const hostName = hostNameRef.current.value;
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const location = locationRef.current.value;
    const image = imageRef.current.value;
    setEventData([
      { eventName, hostName, startDate, endDate, location, image },
    ]);

    navigate("/event", {
      state: { eventName, hostName, startDate, endDate, location, image },
    });
  };
  console.log(eventData);
  return (
    <div className="hero-content text-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleFormSubmit}>
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Event Name</span>
              </label>
              <input
                required
                type="text"
                ref={eventNameRef}
                placeholder="event name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Host Name</span>
              </label>
              <input
                required
                type="text"
                ref={hostNameRef}
                placeholder="Host Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Start Date</span>
              </label>
              <input
                required
                type="datetime-local"
                ref={startDateRef}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">End Date</span>
              </label>
              <input
                required
                type="datetime-local"
                ref={endDateRef}
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                required
                type="text"
                ref={locationRef}
                placeholder="Location"
                class="input input-bordered"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Image Link</span>
              </label>
              <input
                required
                type="text"
                ref={imageRef}
                placeholder="Image Link"
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Next </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
