import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <div class="card w-96  ">
            <figure>
              <img
                className="h-96 "
                src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T163818Z&X-Amz-Expires=86400&X-Amz-Signature=93bab89e80637166d9d9ee9d94e37dfe3e42b0d23f3bc943035a2beefd678dea&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
                alt="Shoes"
              />
            </figure>
          </div>
          <div>
            <h1 class="text-5xl font-bold">Imagine if had events.</h1>
            <h1 class="text-5xl font-bold">Snapchat </h1>
            <h1 class="text-5xl font-bold">had Events. </h1>

            <p class="py-6">
              Easily host and share events with your friends across any social
              media.
            </p>
            <Link to="/create">
              <button class="btn btn-primary">Create My Event</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
