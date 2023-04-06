import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <div onClick={onClick}>
      {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
    </div>
  );
};

export default FavoriteButton;
