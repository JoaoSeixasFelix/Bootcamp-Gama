import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SignIN from "./signin";
import SignUp from "./signup";

const Home: NextPage = () => {
  return (
    <div>
      <SignIN/>
    </div>
  );
};

export default Home;
