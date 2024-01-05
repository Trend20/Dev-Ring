import React, { useState } from "react";
import profileImg from "../assets/images/pic.jpeg";
import Communities from '../components/Communities';
import Events from "../components/Events";
import Favorites from "../components/Favorites";
import Archived from "../components/Archived";

const Profile = () => {
  const [openTab, setOpenTab] = useState<string>("communities");

  const handleTabOpen = (tabCategory: string) => {
      setOpenTab(tabCategory);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const data = [
    {
      label: "My Communities",
      value: "html",
      content:"Yes"
    },
    {
      label: "My Events",
      value: "react",
      content:"Yes"
    },
    {
      label: "My Favorites",
      value: "vue",
      content:"Yes"
    },
    {
      label: "Archived",
      value: "angular",
      content:"Yes"
    },
  ];
  return (
    <div className="flex bg-cyan-200 flex-col h-auto w-full pt-10">
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <img
          src={profileImg}
          alt="profile"
          className="flex w-40 h-40 rounded-full"
        />
        <h5>Dev Enock</h5>
        <p>enockdevring@gmail.com</p>
      </div>
      <section className="py-5 dark:bg-dark">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mb-14 w-full">
                                <div className="flex flex-col justify-between w-full  flex-wrap rounded-full border border-blue-gray-200 px-2 py-2 dark:border-dark-3 sm:flex-row">
                                    <a
                                        onClick={() => handleTabOpen("communities")}
                                        className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                                            openTab === "communities"
                                                ? "bg-boxdark text-white"
                                                : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                    >
                                        Communities
                                    </a>
                                    <a
                                        onClick={() => handleTabOpen("events")}
                                        className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                                            openTab === "events"
                                                ? "bg-boxdark text-white"
                                                : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                    >
                                        Events
                                    </a>
                                    <a
                                        onClick={() => handleTabOpen("favorites")}
                                        className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                                            openTab === "favorites"
                                                ? "bg-boxdark text-white"
                                                : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                    >
                                        Favorites
                                    </a>
                                    <a
                                        onClick={() => handleTabOpen("archived")}
                                        className={`cursor-pointer rounded-full px-4 py-3 text-sm w-32 bg-blue-gray-50 items-center justify-center flex font-medium md:text-base lg:px-6 ${
                                            openTab === "archived"
                                                ? "bg-boxdark text-white"
                                                : "text-body-color hover:bg-black hover:text-white dark:text-dark-6 dark:hover:text-white"
                                        }`}
                                    >
                                        Archived
                                    </a>
                                </div>
                                <Communities tabCategory="communities" open={openTab}/>
                                <Events tabCategory="events" open={openTab}/>
                                <Favorites tabCategory="favorites" open={openTab}/>
                                <Archived tabCategory="archived" open={openTab}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default Profile;
