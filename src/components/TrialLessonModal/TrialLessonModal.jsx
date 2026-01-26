import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import style from "./TrialLessonModal.module.css";

const schema = yup.object({
  reason: yup.string().required("Please select a reason"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
});

function TrialLessonModal({ teacher, onClose }) {
  const reasons = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = () => {
    toast.success("Trial lesson request sent successfully!");
    onClose();
  };

  return (
    <div className={style.modal_backdrop} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_head}>
          <h2 className={style.modal_h2}>Book trial lesson</h2>
          <button onClick={onClose} className={style.modal_close}>
            ✕
          </button>
        </div>

        <p className={style.modal_desc}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={style.teacherInfo}>
          <div>
            <img
              className={style.modal_avatar}
              src={teacher.avatar_url}
              alt="avatar"
              width={44}
              height={44}
            />
          </div>
          <div>
            <span className={style.modal_span}>Your teacher</span>
            <p className={style.teacher_p}>
              {teacher.name} {teacher.surname}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.radioGroup}>
            <p className={style.radioTitle}>
              What is your main reason for learning English?
            </p>

            {reasons.map((reason) => (
              <label key={reason} className={style.radioItem}>
                <input
                  className={style.modal_radio}
                  type="radio"
                  value={reason}
                  {...register("reason")}
                />
                {reason}
              </label>
            ))}

            {errors.reason && (
              <p className={style.error}>{errors.reason.message}</p>
            )}
          </div>

          <input
            className={style.input_}
            type="text"
            placeholder="Full Name"
            {...register("name")}
          />
          {errors.name && <p className={style.error}>{errors.name.message}</p>}

          <input
            className={style.input_}
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}

          <input
            className={style.input_}
            type="tel"
            placeholder="Phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={style.error}>{errors.phone.message}</p>
          )}

          <button type="submit" className={style.submit_btn}>
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default TrialLessonModal;
