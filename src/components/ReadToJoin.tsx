const ReadToJoin = (): JSX.Element => {
  return (
    <div className="flex text-cyan-200 flex-col justify-center items-center w-1/2 m-auto p-5 mt-40">
      <p className="flex w-72 -rotate-45">
        <svg viewBox="0 0 200 200">
          <path
            d="M 43.268 68.491 C 45.299 73.362 49.466 84.503 49.894 90.103 M 96.026 42.825 C 91.393 56.451 81.245 85.486 77.722 92.618 M 106.911 105.701 C 115.338 96.409 133.856 76.994 140.501 73.674 M 121.449 128.144 C 128.309 126.305 144.878 122.279 156.268 120.889 M 120.076 150.692 C 123.463 151.132 131.74 153.176 137.755 157.825"
            stroke-width="10"
            stroke="rgb(61, 204, 199)"
            stroke-linecap="round"
            fill="none"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </p>
      <h1 className="text-4xl font-bold">Ready to Join a Community?</h1>
      <p className="w-1/2 text-center mt-5">
        Take a leap and join thousands of developers already enhancing their
        skills, expanding their networks, and building great things. You’re just
        a few clicks away from finding the perfect community for you!
      </p>
      <button className="text-black rounded bg-cyan-300 font-bold p-3 mt-5 justify-center items-center flex w-40">
        Find Yours Now!
      </button>
    </div>
  );
};

export default ReadToJoin;
