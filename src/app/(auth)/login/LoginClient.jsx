"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import LogoImg from "@/assets/colorful.svg";
import Input from "@/components/input/Input";
import Loader from "@/components/loader/Loader";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";
import Button from "@/components/button/Button";
import Divider from "@/components/divider/Divider";
import styles from "./Auth.module.scss";

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
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoImg} alt="logo" />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => setIsAutoLogin(e.target.checked)}
              />
            </div>
            <div className={styles.buttonGroup}>
              <Button />
              <Divider />
              <Button />
            </div>
            <div></div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
