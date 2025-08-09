function Title({
  children,
  className,
  center = false,
  smaller = false,
  smallest,
}) {
  if (smallest) {
    return (
      <h1
        className={` font-semibold text-sm text-titleColor ${
          center && "text-center"
        } ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (smaller) {
    return (
      <h1
        className={` font-semibold text-lg text-titleColor ${
          center && "text-center"
        } ${className}`}
      >
        {children}
      </h1>
    );
  }
  return (
    <h1
      className={` text-3xl font-semibold py-8 ${
        center && "text-center"
      } text-titleColor xl:text-4xl ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
