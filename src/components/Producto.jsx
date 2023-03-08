import { useDispatch } from "react-redux";
import { addProductoModal } from "../store/slices/productos/productosSlice";

export const Producto = ({ producto }) => {
  const dispatch = useDispatch();

  // funcion agregar Producto Modal
  const productoModal = (producto) => {
    dispatch(addProductoModal(producto));
  };

  return (
    <div>
      <div onClick={() => productoModal(producto)} className="producto">
        <img
          className="producto__img"
          src={producto.img}
          alt={producto.nombre}
          loading="lazy"
        />
        <div className="producto__informacion">
          <h6 className="producto__nombre">{producto.nombre}</h6>
          <div className="producto__descripcion">
            {producto?.nombre === "BG" ||
            producto?.nombre === "Bio-Tone NTS" ||
            producto?.nombre === "CoQ10" ||
            producto?.nombre === "Pro Vitality" ||
            producto?.nombre === "Tre en en" ||
            producto?.nombre === "Vitamin E plus" ||
            producto?.nombre === "Vita-Squares"|| 
            producto?.nombre === "Aloe Vera Gel"
              ? producto.descripcion.map((item, index) => (
                  <p key={index}>{item}</p>
                ))
              : producto.descripcion
                  .split(".")
                  .map((des, index) => <p key={index}>{des}</p>)}
          </div>
          <h6 className="producto__precio">
            $ {producto?.precio.toLocaleString("es-MX")}.00 MX
          </h6>
        </div>
      </div>
    </div>
  );
};
