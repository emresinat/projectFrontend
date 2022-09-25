import Head from "next/head";
import { getSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const router = useRouter();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/login");
      } else {
        setIsLoading(false);
        setSession(session);
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("api/users")
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          setUsers(res?.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getUsers = () => {
    if (users?.length === 0 && !users) {
      return <div>No users can be found</div>;
    } else {
      return users?.map((user) => (
        <div key={user?._id} className={styles.userTableItem}>{user?.email}</div>
      ));
    }
  };

  if (isLoading || loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Emre Sinat Project 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        <div className={styles.productTable}>
          {" "}
          <div className={styles.productTableHeader}>Registered Users</div>
          {getUsers()}
        </div>
      }
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: session,
  };
}
