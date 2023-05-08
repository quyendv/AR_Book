import { Link } from 'react-router-dom';
import images from '~/assets/images';
import routesConfigs from '~/configs/routes.config';

export function Logo() {
  return (
    <Link to={routesConfigs.home} className="flex items-center gap-4">
      <img className="inline-block h-12 w-12 object-cover" src={images.logoIcon} alt="logo-icon" />
      <span className="text-4xl font-bold tracking-wider text-secondary">AR Book</span>
    </Link>
  );
}
