"use client";

import React, { useState } from "react";
import Link from "next/link";

import Loader from "@/components/loader/Loader";
import Heading from "@/components/heading/Heading";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import styles from "./Reset.module.scss";

const ResetClient = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.form}>
            <Heading
              title="비밀번호 업데이트"
              subtitle="이메일 주소를 입력해주세요."
            />
            <form onSubmit={resetPassword}>
              <Input
                type="text"
                placeholder="Email"
                required
                value={email}
                className={styles.control}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <Button type="submit">업데이트</Button>
              </div>

              <div className={styles.links}>
                <p>
                  <Link href="/login">로그인</Link>
                </p>
                <p>
                  <Link href="/register">회원가입</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetClient;
