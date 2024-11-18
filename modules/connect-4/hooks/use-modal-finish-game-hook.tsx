import { useState } from 'react';

function useModalFinishGame() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);   

  };

  return { open, handleOpen, handleClose };
}

export default useModalFinishGame;
