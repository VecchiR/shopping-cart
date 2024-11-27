import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartContent from './CartContent';
import ViewCartButton from './ViewCartButton';
import { Link } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>Your Cart</h1>
        <CartContent />
        <Link to="/cart">
            <ViewCartButton />
        </Link>
      </div>
    </div>
  );
};

export default CartModal;