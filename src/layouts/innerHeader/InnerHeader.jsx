"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import classNames from "classnames";

import freshIcon from "@/assets/icon-fresh.svg";
import rocketIcon from "@/assets/icon-rocket.svg";
import newIcon from "@/assets/new.svg";
import logo from "@/assets/colorful.svg";
import styles from "./InnerHeader.module.scss";

const InnerHeader = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleClick = () => {
    router.push("/cart");
  };

  return (
    <div className={styles.innerHeader}>
      <h1 className={styles.brand}>
        <Link href="/">
          <Image src={logo} alt="logo" width={211} height={48} priority />
        </Link>
      </h1>
      <button type="button" className={styles.buttonCategory}>
        카테고리
      </button>
      <form action="/" className={styles.searchForm}>
        <fieldset>
          <div className={styles.searchFormWrapper}>
            <div className={styles.formSelect}>
              <select name="searchCategory" id="searchCategory">
                <option>전체</option>
              </select>
              <svg
                className={styles.iconDown}
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0H0L4.69565 6L9 0Z" fill="#767676" />
              </svg>
            </div>
            <div className={styles.formInput}>
              <input
                type="search"
                id="searchKeyword"
                placeholder="찾고 싶은 상품을 검색해보세요!"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button type="button" className={styles.searchButton}></button>
            <button type="button" className={styles.voiceSearchButton}></button>
          </div>
        </fieldset>
      </form>
      <div className={styles.myCoupang}>
        <button
          type="button"
          className={classNames(styles.button, styles.myCoupangButton)}
        >
          마이쿠팡
        </button>
        <ul className={styles.myCoupangList}>
          <li>
            <Link href="/">주문목록</Link>
          </li>
          <li>
            <Link href="/">취소/반품</Link>
          </li>
          <li>
            <Link href="/">찜리스트</Link>
          </li>
        </ul>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartButtonWrapper}>
          <button
            type="button"
            onClick={handleClick}
            className={classNames(styles.button, styles.cartButton)}
          >
            장바구니
          </button>
          <strong className={styles.cartProductCount}>1</strong>
        </div>
      </div>
      <div className={styles.typeNavigation}>
        <ul className={styles.typeNavigationList}>
          <li>
            <Link href="/">
              <Image
                src={rocketIcon}
                className={styles.badgeRocket}
                alt="rocket"
              />
              로켓배송
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={freshIcon}
                className={styles.badgeRocket}
                alt="fresh"
              />
              로켓프레시
            </Link>
          </li>
          <li>
            <Link href="/">
              2022년 설날
              <Image src={newIcon} alt="new" className={styles.badgeNew} />
            </Link>
          </li>
          <li>
            <Link href="/">로켓직구</Link>
          </li>
          <li>
            <Link href="/">골든박스</Link>
          </li>
          <li>
            <Link href="/">정기배송</Link>
          </li>
          <li>
            <Link href="/">이벤트/쿠폰</Link>
          </li>
          <li>
            <Link href="/">기획전</Link>
          </li>
          <li>
            <Link href="/">여행티켓</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnerHeader;
