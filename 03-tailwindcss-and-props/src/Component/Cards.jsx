import React from "react";

function Cards({username, btnText = "visit me"}) {

    // console.log("props", props.username)
    console.log(username)
  return (
    <a
      className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center mb-4"
      href="#"
    >
      <img
        src="https://loremflickr.com/800/600/girl"
        className="shadow rounded-lg overflow-hidden border"
      />
      <div className="mt-8">
        <h4 className="font-bold text-xl">{username}</h4>
        <p className="mt-2 text-gray-600">
          Create Exercises for any subject with the topics you and your students
          care about.
        </p>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
          >
            {btnText || "visit me"}
          </button>
        </div>
      </div>
    </a>
  );
}

export default Cards;
