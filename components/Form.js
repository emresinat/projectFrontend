import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { hashPassword } from "../lib/auth";

const Form = () => {
  const router = useRouter();

  const [formType, setFormType] = useState("signin");
  const [changeText, setChangeText] = useState("Click Here To Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailInUseError, setEmailInUserError] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeFormType = () => {
    setFormType((prevType) => {
      return prevType === "signin" ? "signup" : "signin";
    });
  };

  useEffect(() => {
    setChangeText(
      formType === "signin" ? "Click Here To Sign Up" : "Click Here To Log In"
    );
  }, [formType]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formType === "signup") {
      setLoading(true);
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Check your email!");
        setLoading(false);
      } else if (password?.length < 6) {
        setPasswordError("Check your password!");
        setEmailError(null);
        setLoading(false);
      } else {
        setEmailError(null);
        setPasswordError(null);
        const hashedPassword = await hashPassword(password);
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email: email, password: hashedPassword }),
        };
        fetch("api/users", options)
          .then((res) => res.json())
          .then((res) => {
            if (res?.status === "inUse") {
              setEmailInUserError(true);
            } else {
              setEmailInUserError(false);
            }
          })
          .finally(() => {
            setLoading(false);
          });
        setEmail("");
        setPassword("");
      }
    } else if (formType === "signin") {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Check your email!");
        setLoading(false);
      } else if (password?.length < 6) {
        setPasswordError("Check your password!");
        setEmailError(null);
        setLoading(false);
      } else {
        setEmailError(null);
        setPasswordError(null);
        const result = await signIn("credentials", {
          redirect: false,
          email: email,
          password: password,
        });
        if (!result?.ok) {
          setPasswordError(result?.error);
        } else if (!result.error) {
          setEmail("");
          setPassword("");
          router.replace("/");
        }
      }
    }
  };

  return (
    <div className={styles.formCard}>
      {emailInUseError ? (
        <div className={styles.inputError}>This Email Is Used</div>
      ) : (
        ""
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={styles.input}
          value={email}
          onInput={(e) => {
            setEmail(e?.target?.value);
          }}
        ></input>
        {emailError ? (
          <div className={styles.inputError}>{emailError}</div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.inputFieldPassowrd}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={styles.input}
          value={password}
          onInput={(e) => {
            setPassword(e?.target?.value);
          }}
        ></input>
        {passwordError ? (
          <div className={styles.inputError}>{passwordError}</div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.buttonField}>
        <input
          type="submit"
          className={styles.inputButton}
          value="Submit"
          disabled={loading}
          onClick={(e) => {
            onSubmit(e);
          }}
        ></input>
      </div>
      <div onClick={changeFormType} className={styles.changeFormText}>
        {changeText}
      </div>
    </div>
  );
};

export default Form;
