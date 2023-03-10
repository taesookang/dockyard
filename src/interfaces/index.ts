export interface ITicket {
  id: string;
  type: "weekend" | "event" | "voucher";
  title: string;
  price: number;
  month?: number | null;
  day?: number | null;
}

export interface ITicketInCart extends ITicket {
  quantity: number;
}
