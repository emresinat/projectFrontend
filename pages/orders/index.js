import { getSession } from "next-auth/react";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [session, setSession] = useState({});
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/login");
      } else {
        setSession(session);
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (session.user?.id) {
      setLoading(true);
      fetch(`api/orders`)
        .then((res) => res.json())
        .then((res) => {
          if (!res || res?.length === 0) {
            setOrders(null);
          } else {
            const orders = res.reduce((orders, item) => {
              const order = orders[item.userOrderId] || [];
              order.push(item);
              orders[item.userOrderId] = order;
              return orders;
            }, {});
            setOrders(orders);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session.user]);
  const getOrders = () => {
    if (!orders) {
      return <div>No orders can be found</div>;
    } else {
      const orderIds = Object.keys(orders);
      return orderIds?.map((orderId) => {
        const orderProducts = orders[orderId];
        let totalPrice = 0;
        orderProducts?.forEach((product) => {
          totalPrice += product?.productPrice;
        });
        return (
          <div
            key={orderId}
            className={styles.orderTable}
            onClick={(e) => {
              router.push(`orders/${orderId}`);
            }}
          >
            <div className={styles.orderHeader}>
              <div className={styles.orderHeaderItem}>OrderId- {orderId}</div>
              <div className={styles.orderHeaderItem}>
                TotalPrice -{" "}
                {orderProducts && orderProducts?.length !== 0 ? totalPrice : 0}
              </div>
            </div>
            {orderProducts?.map((product) => {
              return (
                <div
                  key={`${product?.productName}-${orderId}`}
                  style={{ marginTop: "0.5rem", textAlign: "center" }}
                >
                  {product?.productName}-{product?.productPrice}$
                </div>
              );
            })}
          </div>
        );
      });
    }
  };

  if (isLoading || loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {
        <div className={styles.productTable}>
          <>
            <div className={styles.productTableHeader}>All Orders</div>
            {getOrders()}
          </>
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
