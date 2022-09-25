import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const onHomeClick = () => {
    router.push("/");
  };

  const onLoginClick = () => {
    router.push("/login");
  };
  const onProductsClick = () => {
    router.push("/products");
  };
  const onMyOrdersClick = () => {
    router.push("/myOrders");
  };
  const onOrdersClick = () => {
    router.push("/orders");
  };

  const logoutHandler = () => {
    signOut();
  }

  return (
    <div className={styles.navbar}>
      {status !== "authenticated" && (
        <div onClick={onLoginClick} className={styles.navbarItem}>
          Login
        </div>
      )}
      {status === "authenticated" && (
        <>
          <div onClick={onHomeClick} className={styles.navbarItem}>
            Home
          </div>
          <div onClick={onProductsClick} className={styles.navbarItem}> Products </div>
          <div onClick={onOrdersClick} className={styles.navbarItem}> Orders </div>
          <div onClick={onMyOrdersClick} className={styles.navbarItem}> My Orders </div>
          <div onClick={logoutHandler} className={styles.navbarItem}> Logout </div>
        </>
      )}
    </div>
  );
}
