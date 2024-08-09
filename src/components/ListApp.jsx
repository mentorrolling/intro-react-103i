const ListApp = ({ datos, subtitle }) => {
  //   const { datos } = props;
  return (
    <section>
      <h3>{subtitle}</h3>
      <ol>
        {datos.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ol>
    </section>
  );
};

export default ListApp;
