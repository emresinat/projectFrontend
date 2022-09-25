import { getSession } from "next-auth/react";
import styles from "../../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [products, setProducts] = useState(null);
  const [editProduct, setEditProduct] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sendError, setSendError] = useState(null);

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
    fetch(`/api/products/${router?.query?.slug[0]}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onEditProduct = (e) => {
    setEditProduct(true);
    setSendError(null);
  };

  const onDeleteProduct = async (e) => {
    const result = await fetch(`/api/products/${router?.query?.slug[0]}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await result.json();
    setSendError(res?.message);
  };

  const onConfirmEdit = async (e) => {
    if (
      !price ||
      price?.trim()?.length === 0 ||
      !name ||
      name?.trim()?.length === 0
    ) {
      setSendError("All Fields Required");
    } else {
      sendError ? setSendError(null) : "";
      const result = await fetch(`/api/products/${router?.query?.slug[0]}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, price: price }),
      });
      if (result.ok) {
        const res = await result.json();
        setSendError(res?.message);
      } else {
        setSendError("An error occured");
      }
      setName("");
      setPrice("");
    }
  };

  const getProducts = () => {
    if (products?.length === 0 || !products) {
      return <div>No products can be found with that id</div>;
    } else {
      return products?.map((product) => (
        <div
          key={product?.id}
          className={styles.productTableItem}
          onClick={(e) => {
            router?.push(`/products/${product?.id}`);
          }}
        >
          {product?.name} - {product?.price}{" "}
        </div>
      ));
    }
  };

  if (isLoading || loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {
        <div className={styles.productTable}>
          {!editProduct && (
            <>
              {getProducts()}
              {products && products.length !== 0 &&
                <>
                  <button type="button" onClick={(e) => onEditProduct(e)}>
                    Edit Product
                  </button>
                  <button type="button" onClick={(e) => onDeleteProduct(e)}>
                    Delete Product{" "}
                  </button>
                </>
              }
              <div>{sendError}</div>
            </>
          )}
          {editProduct && (
            <>
              Edit Product
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
              ></input>
              <label for="name">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e?.target?.value);
                }}
              ></input>
              <button type="button" onClick={(e) => onConfirmEdit(e)}>
                Confirm Edit
              </button>
              <div>{sendError}</div>
              <button type="button" onClick={(e) => {setEditProduct(false); setSendError(false)}}>
                Go Back To Product Page
              </button>
            </>
          )}
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
