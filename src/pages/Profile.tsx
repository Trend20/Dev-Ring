import React from "react";
import profileImg from "../assets/images/pic.jpeg";
import logoSvg from '../assets/images/logo.svg'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("html");
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
      <Tabs value={activeTab} className="w-1/2 mt-20 m-auto">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex w-96">
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value}>
             {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Profile;
