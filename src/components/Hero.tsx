const Hero = (): JSX.Element => {
  return (
    <div className="flex text-center justify-center w-full bg-cyan-200 min-h-screen pt-60 max-md: px-3">
      <div className="flex flex-col border-spacing-2 border-black h-96 justify-center text-center w-1/2 border-8 bg-cyan-100 max-md:w-full">
        <h1 className="text-black text-9xl font-bold max-md:text-7xl">Connect!</h1>
        <p className="flex mt-10 text-lg justify-center text-center">
          Discover Local Developer Communities
        </p>
      </div>
    </div>
  );
};

export default Hero;
