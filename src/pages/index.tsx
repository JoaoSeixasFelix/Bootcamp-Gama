import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SignUp from "./signup";

const Home: NextPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Home;
