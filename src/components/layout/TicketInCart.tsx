import React from "react";
import { ModalItem } from ".";
import { ITicketInCart } from "../../interfaces";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart, updateQuantity } from "../../redux/ticketSlice";

interface Props {
  ticket: ITicketInCart;
}

export const TicketInCart: React.FC<Props> = ({ ticket }) => {
  const dispatch = useAppDispatch();
  return (
    <ModalItem itemClassName="min-h-[20vh]" contentClassName="w-[90%] h-[80%]">
      <div className="p-[3%] w-full h-full flex flex-col justify-between">
        <div className="font-bold text-[2vh]">{ticket.title}</div>
        <div className="flex text-[1.5vh] py-2">
          <div className="">Quantity x </div>
          <input
            className="w-[15%] h-auto bg-transparent px-2"
            type="number"
            min={1}
            value={ticket.quantity}
            onChange={(e) => {
              dispatch(
                updateQuantity({
                  id: ticket.id,
                  quantity: parseInt(e.target.value, 10),
                })
              );
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="font-bold"
            onClick={() => dispatch(removeFromCart(ticket.id))}
          >
            Remove
          </button>
          <div>${ticket.price}</div>
        </div>
      </div>
    </ModalItem>
  );
};

export default TicketInCart;
