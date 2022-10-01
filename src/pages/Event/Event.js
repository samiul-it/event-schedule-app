import React from "react";
import { useLocation } from "react-router-dom";
import { VscCalendar, VscLocation } from "react-icons/vsc";

const Event = (props) => {
  const location = useLocation();

  console.log(location.state);
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card w-96  ">
            <figure>
              <img
                className="h-96 "
                src={location.state.image}
                alt="Event Image "
              />
            </figure>
          </div>
          <div>
            <h1 class="text-5xl font-bold">{location.state.eventName}</h1>
            <p>
              Hosted By{" "}
              <span className="font-bold">{location.state.hostName}</span>
            </p>
            <div className="flex items-center p-3">
              <VscCalendar />
              <p className="p-4">
                <span className="font-bold"> {location?.state?.startDate}</span>
                to {location?.state?.endDate}
              </p>
            </div>
            <div className="flex items-center px-3">
              <VscLocation />
              <p className="p-4">
                <span className="font-bold"> Street Name</span>
              </p>
              <br />
              <p>{location.state.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
