import images from '~/assets/images';

function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center">
      {/* Home Image */}
      <div className="w-1/2 md:w-2/5">
        <img className="w-full object-cover" src={images.homeImage} alt="landing-img" />
      </div>

      {/* Text Desc */}
      <div className="flex w-[45%] flex-col gap-8 px-2 font-normal text-white md:gap-10">
        <p className="text-lg text-primary md:text-2xl lg:text-3xl">FROM IDEAS TO REALITY</p>
        <p className="text-2xl leading-tight tracking-wider md:text-4xl lg:text-5xl">
          AR Model Management for <span className="text-secondary">Admin</span>
        </p>
        <p className="line-clamp-3 text-left text-base md:text-lg lg:line-clamp-none lg:text-2xl">
          Streamline your AR model management process with our comprehensive admin-only website. Access, edit, and
          delete AR models with ease, and keep track of your inventory in one centralized location.
        </p>
      </div>
    </main>
  );
}

export default Home;
