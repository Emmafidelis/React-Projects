import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaHeart color="red" size={30} onClick={toggleStatus} />;
  return <CiHeart size={30} onClick={toggleStatus} />;
};

export default Like;
