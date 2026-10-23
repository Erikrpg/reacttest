import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ReaderForm.css";

const schema = yup.object({
  name: yup.string().required("სახელის შეყვანა სავალდებულოა"),

  email: yup
    .string()
    .required("ელფოსტის შეყვანა სავალდებულოა")
    .email("შეიყვანეთ სწორი ელფოსტა"),

  password: yup
    .string()
    .required("პაროლის შეყვანა სავალდებულოა")
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს"),
});

export default function ReaderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log("რეგისტრაცია განხორციელდა");
    console.log("სახელი:", data.name);
    console.log("ელფოსტა:", data.email);
  }

  return (
    <div className="form-container">
      <h2>მკითხველის რეგისტრაცია</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">სახელი</label>
          <input
            id="name"
            type="text"
            placeholder="შეიყვანეთ სახელი"
            {...register("name")}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">ელფოსტა</label>
          <input
            id="email"
            type="email"
            placeholder="შეიყვანეთ ელფოსტა"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">პაროლი</label>
          <input
            id="password"
            type="password"
            placeholder="შეიყვანეთ პაროლი"
            {...register("password")}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <button type="submit">რეგისტრაცია</button>
      </form>
    </div>
  );
}
