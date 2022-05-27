import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Item from "./Item";

const ArtModal = ({ closeModal, item }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="modal">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {item.img ? (
            item.img.map((item, index) => {
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
          <p>{item.medium}</p>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn"
            onClick={() => {
              closeModal(false);
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ArtModal;
