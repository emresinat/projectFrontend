import { getSession } from "next-auth/react";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [products, setProducts] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sendError, setSendError] = useState(null);
  const [createProduct, setCreateProduct] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [session, setSession] = useState({});
  const [productsChanged, setProductsChanged] = useState(false);

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
    setLoading(true);
    fetch("api/products")
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
  }, [productsChanged]);

  const handleProductSelect = (e, product) => {
    const productId = product?.id;
    const isChecked = e?.target?.checked;
    isChecked
      ? setSelectedProducts((prev) => [...prev, product])
      : setSelectedProducts((prev) =>
          prev?.filter((item) => item?.id !== productId)
        );
  };

  const getProducts = () => {
    if (products?.length === 0 || !products) {
      return <div>No products can be found</div>;
    } else {
      return products?.map((product) => (
        <div style={{ display: "flex" }} key={product?.id}>
          <div
            className={styles.productTableItem}
            onClick={(e) => {
              router?.push(`/products/${product?.id}`);
            }}
          >
            {product?.name} - {product?.price}$
          </div>
          <input
            id={product?.id}
            type="checkbox"
            onClick={(e) => handleProductSelect(e, product)}
          ></input>
        </div>
      ));
    }
  };


  const onConfirmCreate = async (e) => {
    if (
      !price ||
      price?.trim()?.length === 0 ||
      !name ||
      name?.trim()?.length === 0
    ) {
      setSendError("All Fields Required");
    } else {
      sendError ? setSendError(null) : "";
      const result = await fetch(`/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, price: price }),
      });
      if (result.ok) {
        const res = await result.json();
        setSendError(res?.message);
        setProductsChanged(prev => !prev)
      } else {
        setSendError("An error occured");
      }
      setName("");
      setPrice("");
    }
  };

  const onCreateOrder = async (e) => {
    if (!selectedProducts || selectedProducts?.length === 0) {
      setSendError("Please select products!");
    } else {
      sendError ? setSendError(null) : "";
      const result = await fetch(`/api/users/${session.user.id}/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: selectedProducts }),
      });
      if (result.ok) {
        setSendError("Order successfully created!");
      } else {
        setSendError("An error occured");
      }
      setSelectedProducts([])
    }
  };

  if (isLoading || loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {
        <div className={styles.productTable}>
          {createProduct && (
            <>
              Create Product
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
              <button type="button" onClick={(e) => onConfirmCreate(e)}>
                Confirm Create
              </button>
              <button
                type="button"
                onClick={(e) => {
                  setCreateProduct(false);
                  setSendError(null)
                }}
              >
                Go Back To Product Page
              </button>
              <div>{sendError}</div>
            </>
          )}
          {!createProduct && (
            <>
              <div className={styles.productTableHeader}>All Products</div>
              {getProducts()}
              <button
                type="button"
                onClick={(e) => {
                  setCreateProduct(true);
                  setSendError(null);
                }}
              >
                Create Product
              </button>
              {products && products.length !== 0 && (
                <button type="button" onClick={(e) => onCreateOrder(e)}>
                  Create Order
                </button>
              )}
              <div>{sendError}</div>
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
