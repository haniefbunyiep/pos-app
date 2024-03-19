"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { loginSchema } from "~/support/schema/loginSchema";
import { useRouter } from "next/navigation";
import { useAuthMutation } from "~/api/useAuthMutation";
import { useZustandStores } from "~/zustandStores";

export default function HomePage() {
  const redirect = useRouter();

  const { users, createUsers } = useZustandStores();
  const handleAuthMutationSucces = (data) => {
    createUsers({
      id: data[0].id,
      username: data[0].username,
      role: data[0].roleId,
    });
    localStorage.setItem(
      "userLocalStorage",
      JSON.stringify({
        id: data[0].id,
        username: data[0].username,
        role: data[0].roleId,
      }),
    );
    if (data[0].roleId === 1) {
      redirect.push("/super-admin-dashboard");
    } else if (data[0].roleId === 2) {
      redirect.push("/admin-dashboard");
    }
    alert("Login Succes");
  };

  const handleAuthMutationError = (err) => {
    alert(err.message);
  };

  const { mutate, status } = useAuthMutation({
    onSuccess: handleAuthMutationSucces,
    onError: handleAuthMutationError,
  });

  // let findEmail;

  // const handleLogin = async (values, resetForm) => {
  //   let findEmail;
  //   try {
  //     if (values.emailOrUsername.includes("@")) {
  //       findEmail = await axiosInstance.get(
  //         `/users?email=${values.emailOrUsername}`,
  //       );
  //     } else {
  //       findEmail = await axiosInstance.get(
  //         `/users?username=${values.emailOrUsername}`,
  //       );
  //     }
  //     console.log(findEmail.data[0].roleId);
  //     console.log(findEmail.data);
  //     if (
  //       !findEmail.data.length > 0 ||
  //       findEmail.data[0].password !== values.password
  //     ) {
  //       toast.error("Email not found or password incorrect");
  //       return;
  //     }
  //     setUserData({
  //       id: findEmail.data[0].id,
  //       username: findEmail.data[0].username,
  //       role: findEmail.data[0].roleId,
  //     });
  //     localStorage.setItem(
  //       "userLocalStorage",
  //       JSON.stringify({
  //         id: findEmail.data[0].id,
  //         username: findEmail.data[0].username,
  //         role: findEmail.data[0].roleId,
  //       }),
  //     );
  //     resetForm();
  //     toast.success("Login success");
  //     if (findEmail.data[0].roleId === 1) {
  //       redirect.push("/super-admin-dashboard");
  //     } else if (findEmail.data[0].roleId === 2) {
  //       redirect.push("/admin-dashboard");
  //     }
  //   } catch (error) {
  //     toast.error(
  //       error.message ? error.message : "Login Failed Please Try Again!",
  //     );
  //   }
  // };

  useEffect(() => {
    // console.log(userData);
    // console.log(users);
  }, []);

  return (
    <Formik
      initialValues={{
        emailOrUsername: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        const { emailOrUsername, password } = values;
        mutate({ emailOrUsername, password });
        {
          users ? resetForm() : values;
        }
      }}
    >
      {({ dirty, isValid }) => {
        return (
          <Form>
            <div className="flex min-h-screen w-screen flex-col justify-center gap-10 bg-pampas">
              {/* Logo */}
              <div className="flex items-center justify-center">
                <img
                  className="h-[20%]"
                  src="https://portal-gcs-cdn.majoo.id/v2/logo/main-logo-hires.png"
                  alt="majoo-logo"
                />
              </div>
              {/* Form */}
              <div className="flex flex-col items-center justify-center gap-5">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <Field
                    type="text"
                    className="grow"
                    placeholder="Email/Username"
                    name="emailOrUsername"
                  />
                </label>
                <ErrorMessage
                  name="emailOrUsername"
                  component="div"
                  className="text-sm text-red-500"
                />
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Field
                    type="password"
                    className="grow"
                    placeholder="Password"
                    name="password"
                  />
                </label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-500"
                />
                <button
                  type="submit"
                  className="btn w-[240px] bg-deyork text-pampas hover:border-deyork hover:bg-pampas hover:text-deyork"
                  disabled={!(dirty && isValid) || status === "pending"}
                >
                  Log in
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
