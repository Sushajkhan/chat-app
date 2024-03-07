import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const Nav = () => {
  const { logout, isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <>
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="flex fixed bottom-5 h-10 aspect-square lg:hidden justify-center items-center bg-dark left-5 z-50 ring-2 ring-gray-500 rounded-lg text-black bg-"
      >
        <img src={logo} alt="logo" />
      </button>
      {isMobile && (
        <header className="fixed h-screen w-[150px] z-40 lg:static lg:w-[9%] text-black bg-dark flex flex-col px-3 py-4 border-r border-gray-700">
          <Link
            to="/"
            className="flex gap-2 items-center justify-center border-b pb-2 mb-4 border-gray-600"
          >
            <img src={logo} className="h-8" alt="Dot Logo" />
            <span className="font-semibold text-xl mr-2">Dot</span>
          </Link>
          <nav className="h-full flex flex-col my-4 justify-between font-medium pl-2">
            <div className="flex flex-col gap-5 ">
              <Link to="/profile" className="flex items-end gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>Profile</span>
              </Link>
              <Link to="/chathome" className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                <span>Chats</span>
              </Link>
            </div>

            <button onClick={logout} className="bg-black text-white rounded-md">
              <Link className="flex items-end gap-1  px-2 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                Logout
              </Link>
            </button>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;
