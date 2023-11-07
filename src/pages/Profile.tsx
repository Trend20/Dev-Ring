import profileImg from "../assets/images/pic.jpeg";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {TabData} from "../types/tabData";
const Profile = (): JSX.Element => {
    const data:TabData[] = [
        {
            label: "My Communities",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "My Favorites",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "My Archive",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
  return (
    <div className="flex flex-col justify-center items-center bg-cyan-100 pt-10 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <img src={profileImg} alt="profile" className="flex w-40 h-40 rounded-full" />
        <h5>Dev Enock</h5>
        <p>enockdevring@gmail.com</p>
      </div>
      <div className="flex w-1/4 mt-10">
          <Tabs value="html">
              <TabsHeader>
                  {data.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                          {label}
                      </Tab>
                  ))}
              </TabsHeader>
              <TabsBody>
                  {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                          {desc}
                      </TabPanel>
                  ))}
              </TabsBody>
          </Tabs>
      </div>
    </div>
  );
};

export default Profile;
