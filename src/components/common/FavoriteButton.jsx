import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const FavoriteButton = ({ isFavorite, onClick }) => {
  const { state } = useContext(GlobalContext);

  return (
    <button onClick={onClick} className={`button-fav ${state.theme}`}>
      {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
