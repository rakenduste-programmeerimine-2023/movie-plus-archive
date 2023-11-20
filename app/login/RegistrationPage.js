import React from "react";
import Link from "next/link";

const RegistrationPage = () => {
  const handleRegistration = () => {};

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        onSubmit={handleRegistration}
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      >
        <label className="text-md" htmlFor="name">
          Name
        </label>
        <input
          className="input-field"
          name="name"
          placeholder="John"
          required
        />

        <label className="text-md" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="input-field"
          name="lastName"
          placeholder="Doe"
          required
        />

        <label className="text-md" htmlFor="nickname">
          Nickname
        </label>
        <input
          className="input-field"
          name="nickname"
          placeholder="john_d"
          required
        />

        <label className="text-md" htmlFor="username">
          Username
        </label>
        <input
          className="input-field"
          name="username"
          placeholder="john_doe123"
          required
        />

        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />

        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
