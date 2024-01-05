import { useState } from "react";
import profileImg from "../assets/images/pic.jpeg";
import Communities from "../components/Communities";
import Events from "../components/Events";
import Favorites from "../components/Favorites";
import Archived from "../components/Archived";

const Profile = () => {
  const [openTab, setOpenTab] = useState<string>("communities");

  const handleTabOpen = (tabCategory: string) => {
    setOpenTab(tabCategory);
  };

  return (
    <div className="flex bg-cyan-200 flex-col min-h-screen overflow-hidden w-full pt-10">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <img
          src={profileImg}
          alt="profile"
          className="flex w-40 h-40 rounded-full"
        />
        <h5>Dev Enock</h5>
        <p>enockdevring@gmail.com</p>
        <section className="dark:bg-dark mt-5 flex w-full justify-center m-auto">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mb-14 w-full m-auto flex justify-center flex-col">
                  <div className="flex flex-col justify-between w-full flex-wrap rounded-full border border-blue-gray-200 px-2 py-2 dark:border-dark-3 sm:flex-row">
                    <button
                      onClick={() => handleTabOpen("communities")}
                      className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32  bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                        openTab === "communities"
                          ? "bg-black"
                          : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                      }`}
                    >
                      Communities
                    </button>
                    <button
                      onClick={() => handleTabOpen("events")}
                      className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                        openTab === "events"
                          ? "bg-boxdark "
                          : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                      }`}
                    >
                      Events
                    </button>
                    <button
                      onClick={() => handleTabOpen("favorites")}
                      className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                        openTab === "favorites"
                          ? "bg-boxdark "
                          : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                      }`}
                    >
                      Favorites
                    </button>
                    <button
                      onClick={() => handleTabOpen("archived")}
                      className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                        openTab === "archived"
                          ? "bg-boxdark "
                          : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                      }`}
                    >
                      Archived
                    </button>
                  </div>
                  <Communities tabCategory="communities" open={openTab} />
                  <Events tabCategory="events" open={openTab} />
                  <Favorites tabCategory="favorites" open={openTab} />
                  <Archived tabCategory="archived" open={openTab} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
