"use client";
import { useEffect } from "react";
import NewItem from "./new-item";
import Recently from "./recently";
import { smoothscroll } from "@/utils/funtions";

const Home = () => {
  useEffect(() => {
    smoothscroll();
  }, []);
  return (
    <div>
      <NewItem />
      <Recently />
    </div>
  );
};

export default Home;
