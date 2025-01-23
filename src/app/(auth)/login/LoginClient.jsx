"use client";

import React, { useState } from "react";
import Image from "next/image";

import LogoImg from "@/assets/colorful.svg";
import styles from "./Auth.module.scss";
import { useRouter } from "next/navigation";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image priority src={LogoImg} alt="logo" />
        </h1>

        <form className={styles.form} onSubmit={loginUser}>
          <div className={styles.group}></div>
          <div className={styles.buttonGroup}></div>
          <div></div>
        </form>
      </div>
    </section>
  );
};

export default LoginClient;
