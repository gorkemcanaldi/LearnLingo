import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Geçersiz email").required("Email zorunlu"),
  password: yup.string().min(6, "En az 6 karakter").required("Şifre zorunlu"),
});

const registerSchema = yup.object({
  name: yup.string().required("İsim zorunlu"),
  email: yup.string().email("Geçersiz email").required("Email zorunlu"),
  password: yup.string().min(6, "En az 6 karakter").required("Şifre zorunlu"),
});

function AuthModal({ mode, onClose, onAuth }) {
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

  const onSubmit = (data) => {
    onAuth(data);
    onClose();
  };

  return (
    <>
      <div onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>
          <h2>{mode === "login" ? "Log in" : "Register"}</h2>

          <button onClick={onClose}>X</button>

          <form onSubmit={handleSubmit(onSubmit)}>
            {mode === "register" && (
              <>
                <input type="text" placeholder="Name" {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
              </>
            )}

            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">
              {mode === "login" ? "Log in" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
