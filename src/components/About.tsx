const About = (): JSX.Element => {
  return (
    <div className="flex justify-between p-24 w-3/4 m-auto max-md:w-full max-md:p-3 max-md:flex-col">
      <h3 className="text-4xl text-cyan-200 w-1/2 flex justify-center font-bold max-md:w-full max-md:justify-start max-md:mt-16">Never Code Alone</h3>
      <p className="text-2xl text-cyan-200 w-1/2 flex justify-center max-md:w-full max-md:mt-8 max-md:text-xl">
        Wanna supercharge your coding experience while making long-lasting
        connections? Our platform makes it easy to find local developer
        communities that share your passions and drive. Dare to thrive with
        like-minded peers, learn together, and build amazing projects!
      </p>
    </div>
  );
};

export default About;
