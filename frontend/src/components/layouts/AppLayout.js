import Header from '../sections/Header';
import Navbar from '../sections/Navbar';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative flex">
      <Navbar />
      <main className="min-h-screen w-5/6 ml-[16.67%]">
        <Header />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
