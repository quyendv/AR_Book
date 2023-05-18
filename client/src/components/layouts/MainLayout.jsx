import CreateModal from '../common/CreateModal';
import DeleteModal from '../common/DeleteModal';
import Header from '../common/Header';

function MainLayout({ children }) {
  return (
    <>
      <CreateModal />
      <DeleteModal />

      <div className="relative z-0 flex min-h-screen flex-col bg-main bg-rainbow bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:z-[-1] before:bg-overlay">
        {/* Header */}
        <Header />

        <>{children}</>

        {/* Footer */}
      </div>
    </>
  );
}

export default MainLayout;
