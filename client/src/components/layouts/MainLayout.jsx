import Header from '../common/Header';

function MainLayout({ children }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-main bg-rainbow bg-cover bg-center bg-no-repeat text-2xl font-bold before:absolute before:inset-0 before:bg-overlay">
      {/* Header */}
      <Header />

      <>{children}</>

      {/* Footer */}
    </div>
  );
}

export default MainLayout;
