import React, { useEffect } from "react";
import style from "./AuthModal.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser, registerUser } from "../../firebase/auth";

const loginSchema = yup.object({
  email: yup.string().email("Geçersiz email").required("Email zorunlu"),
  password: yup.string().min(6, "En az 6 karakter").required("Şifre zorunlu"),
});

const registerSchema = yup.object({
  name: yup.string().required("İsim zorunlu"),
  email: yup.string().email("Geçersiz email").required("Email zorunlu"),
  password: yup.string().min(6, "En az 6 karakter").required("Şifre zorunlu"),
});

function AuthModal({ mode, onClose }) {
  const schema = mode === "login" ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = async (data) => {
    try {
      if (mode === "login") {
        await loginUser(data.email, data.password);
      } else {
        await registerUser(data.email, data.password, data.name);
      }

      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div onClick={onClose} className={style.modal_backdrop}>
        <div onClick={(e) => e.stopPropagation()} className={style.modal}>
          <div className={style.modal_head}>
            <h2>{mode === "login" ? "Log In" : "Registration"}</h2>
            <button className={style.modal_quit} onClick={onClose}>
              X
            </button>
          </div>

          <p>
            {mode === "login"
              ? "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
              : "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className={style.modal_div}>
            {mode === "register" && (
              <>
                <input
                  className={style.modal_input}
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </>
            )}

            <input
              className={style.modal_input}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              className={style.modal_input}
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button className={style.modal_button} type="submit">
              {mode === "login" ? "Log In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
