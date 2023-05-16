import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import routesConfigs from '~/configs/routes.config';
import { setUser } from '~/redux/features/userSlice';

export function SignIn() {
  const [userData, setUserData] = useState({ email: null, password: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    // e.preventDefault();
    if (userData.email === 'admin@gmail.com' && userData.password === 'pwad123123') {
      dispatch(setUser(userData));
      navigate(routesConfigs.home);
    }
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
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:text-secondary peer-[:not(:placeholder-shown)]:text-secondary">
            <FaLock />
          </label>
        </div>
        <button
          className="mt-8 rounded-full bg-purple-500 p-2 text-xl font-semibold tracking-wider text-white"
          type="submit"
          onClick={handleSubmitForm}
        >
          Login
        </button>
      </form>
    </div>
  );
}
