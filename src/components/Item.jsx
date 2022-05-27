import { useState } from "react";
import ArtModal from "./ArtModal";

const Item = (props) => {
  //id, baseimageurl, title, medium 75462

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="card">
      {props.img ? (
        props.img.map((item, index) => {
          return (
            <img
              key={index}
              width="100px"
              height="100px"
              src={item.baseimageurl}
              alt="{item.baseimageurl}"
            />
          );
        })
      ) : (
        <p>No Image in Database</p>
      )}
      <p>{props.title}</p>
      <p>{props.medium}</p>
      <div>
        <button className="btn">save </button>
        <button
          className="btn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          see more info
        </button>
        {openModal && <ArtModal item={props} closeModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Item;
