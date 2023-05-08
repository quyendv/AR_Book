import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import images from '~/assets/images';

export function SignIn() {
  const [user, setUser] = useState({});

  const handleSubmitForm = () => {
    console.log(user);
  };

  return (
    <div className="m-4 flex min-w-[300px] items-center justify-around gap-10 rounded bg-white/10 px-2 py-10 shadow-md transition-all duration-300 sm:min-w-[450px] lg:min-w-[900px] lg:px-10 lg:py-20">
      <div className="hidden w-2/5 lg:block">
        <img className="w-full" src={images.signInImage} />
      </div>
      <form className="flex w-11/12 flex-col gap-4 sm:w-5/6 lg:w-2/5">
        <h3 className="mb-6 text-center text-3xl font-bold text-secondary">Admin Login</h3>
        <div className="relative rounded bg-black/10">
          <input
            type="email"
            className="peer w-full bg-transparent p-2 pl-10 text-secondary"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:text-secondary peer-[:not(:placeholder-shown)]:text-secondary">
            <FaEnvelope />
          </label>
        </div>
        <div className="relative rounded bg-black/10">
          <input
            type="password"
            className="peer w-full bg-transparent p-2 pl-10 text-secondary"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:text-secondary peer-[:not(:placeholder-shown)]:text-secondary">
            <FaLock />
          </label>
        </div>
        <button
          className="mt-8 rounded-full bg-purple-500 p-2 text-xl font-semibold tracking-wider text-white"
          type="button"
          onClick={handleSubmitForm}
        >
          Login
        </button>
      </form>
    </div>
  );
}
