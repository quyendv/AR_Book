import images from '~/assets/images';

function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center">
      {/* Home Image */}
      <div className="w-[45%]">
        <img className="w-full object-cover" src={images.homeImage} alt="landing-img" />
      </div>

      {/* Text Desc */}
      <div className="flex w-[45%] flex-col gap-10 px-2 font-normal text-white">
        <p className="text-3xl text-primary">FROM IDEAS TO REALITY</p>
        <p className="text-5xl leading-tight">
          Explore The World Using <span className="text-secondary">Augmented Reality</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat sunt consequuntur quis ipsam ea nam quia
          animi, deserunt assumenda!
        </p>
      </div>
    </div>
  );
}

export default Home;
