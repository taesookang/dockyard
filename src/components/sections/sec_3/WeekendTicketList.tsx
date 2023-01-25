import React from "react";
import { ITicket } from "../../../interfaces";

import { BlockHeading } from "../../layout";
import { Ticket } from ".";

interface Props {
  tickets: ITicket[];
}

export const WeekendTicketList: React.FC<Props> = ({ tickets }) => {
  return (
    <div>
      <BlockHeading
        theme="theme3"
        text={["WEEKEND TICKETS", "AND VOUCHERS"]}
        className="mt-[8vw] mb-[12vw] sm:mt-0 sm:mb-[5vw]"
      />
      <ul className="w-full flex flex-col">
        {tickets.map((ticket, idx) => (
          <Ticket
            key={idx}
            id={ticket.id}
            type={ticket.type}
            title={ticket.title}
            price={ticket.price}
            month={ticket.month}
            day={ticket.day}
          />
        ))}
      </ul>
    </div>
  );
};

export default WeekendTicketList;
