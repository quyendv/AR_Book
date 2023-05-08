import images from '~/assets/images';

function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center">
      {/* Home Image */}
      <div className="w-[40%]">
        <img className="w-full object-cover" src={images.homeImage} alt="landing-img" />
      </div>

      {/* Text Desc */}
      <div className="flex w-[45%] flex-col gap-10 px-2 font-normal text-white">
        <p className="text-3xl text-primary">FROM IDEAS TO REALITY</p>
        <p className="text-5xl leading-tight tracking-wider">
          AR Model Management for <span className="text-secondary">Admin</span>
        </p>
        <p className="text-justify text-2xl">
          Streamline your AR model management process with our comprehensive admin-only website. Access, edit, and
          delete AR models with ease, and keep track of your inventory in one centralized location.
        </p>
      </div>
    </main>
  );
}

export default Home;
