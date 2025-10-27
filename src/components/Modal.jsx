import { createPortal } from "react-dom";
import { motion } from "motion/react";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial='hidden'
        animate='visible'
        exit='hidden'
        open
        className='modal'
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
