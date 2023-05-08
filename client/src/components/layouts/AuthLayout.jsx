import { Logo } from '../common/Logo';

export function AuthLayout({ children }) {
  return (
    <div className="min-w-screen relative grid min-h-screen place-content-center bg-gradient-to-l from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute left-6 top-4">
        <Logo />
      </div>
      {children}
    </div>
  );
}
