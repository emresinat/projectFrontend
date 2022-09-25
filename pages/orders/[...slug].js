import { getSession } from "next-auth/react";
import styles from "../../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function OrdersSlug() {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const orderId = router?.query?.slug[0]

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/login");
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/orders/${router?.query?.slug[0]}`)
      .then((res) => res.json())
      .then((res) => {
        setOrder(res)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const getOrder = () => {
    if (!order || order?.length === 0) {
      return <div>No order can be found with that id</div>;
    } else {
      let totalPrice = 0;
      order?.forEach((product) => {
        totalPrice += product?.productPrice;
      });
      return (
        <div className={styles.orderTable}>
          <div className={styles.orderHeader}>
            <div className={styles.orderHeaderItem}>OrderId- {orderId}</div>
            <div className={styles.orderHeaderItem}>
              TotalPrice -{" "}
              {order && order?.length !== 0 ? totalPrice : 0}
            </div>
          </div>
          {order?.map((product) => {
            return (
              <div
                key={product?.productName}
                style={{ marginTop: "0.5rem", textAlign: "center" }}
              >
                {product?.productName}-{product?.productPrice}$
              </div>
            );
          })}
        </div>
      );
    }
  };

  if (isLoading || loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {<div className={styles.productTable}>{getOrder()}</div>}
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
