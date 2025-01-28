"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";

import InnerHeader from "../innerHeader/InnerHeader";
import { auth } from "@/firebase/firebase";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  // const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
      } else {
        setDisplayName("");
      }
    });
  }, []);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 완료");
        router.push("/");
      })
      .catch((error) => toast.error(error.message));
  };

  if (
    pathName === "/login" ||
    pathName === "/register" ||
    pathName === "/reset"
  ) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={"/login"}>로그인</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/admin/dashboard"}>관리자</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/order-history"}>주문 목록</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"} onClick={logoutUser}>
              로그아웃
            </Link>
          </li>

          <li className={styles.item}>
            <Link href={"/"}>제휴 마케팅</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>쿠팡 플레이</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/"}>고객센터</Link>
          </li>
        </ul>
      </div>

      {pathName.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
