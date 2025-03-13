// eslint-disable-next-line react/prop-types

function Container({ classes, children }) {
  return (
    <section className={classes}>
      <div className="container">{children}</div>
    </section>
  );
}

export default Container;
