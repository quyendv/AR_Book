import Header from '../common/Header';

function MainLayout({ children }) {
  return (
    <div className="relative z-0 flex min-h-screen flex-col bg-main bg-rainbow before:absolute before:inset-0 before:z-[-1] before:bg-overlay">
      {/* Header */}
      <Header />

      <>{children}</>

      {/* Footer */}
    </div>
  );
}

export default MainLayout;
