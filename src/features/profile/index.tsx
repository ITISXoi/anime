"use client";
import { useState } from "react";
import ListTab from "./ListTab";
import TitleProfile from "./TitleProfile";
import Favorites from "./tab/favorites";
import Setting from "./tab/settings";
import Subs from "./tab/subs";
import History from "./tab/history";

const Profile = () => {
  const items = [
    {
      key: "profile",
      title: "profile",
      children: <History />,
    },
    {
      key: "subs",
      title: "subs",
      children: <Subs />,
    },
    {
      key: "favorites",
      title: "favorites",
      children: <Favorites />,
    },
    {
      key: "settings",
      title: "settings",
      children: <Setting />,
    },
  ];
  const [tabSelect, setTabSelect] = useState(items[0].key);
  const handleChangeTab = (item: string) => {
    setTabSelect(item);
  };
  const currentTab = items.find((item) => item.key === tabSelect);

  return (
    <>
      <TitleProfile />
      <ListTab
        items={items}
        tabSelect={tabSelect}
        setTabSelect={setTabSelect}
        handleChangeTab={handleChangeTab}
      />
      <div>{currentTab?.children}</div>
    </>
  );
};

export default Profile;
