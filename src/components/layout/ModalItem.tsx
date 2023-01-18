import React from "react";
import Image from "next/image";

interface Props {
  itemClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export const ModalItem: React.FC<Props> = ({
  children,
  itemClassName,
  contentClassName,
}) => {
  return (
    <div className={`modal-item ${itemClassName}`}>
      <div className="absolute top-0 left-0 w-[20%] h-full">
        <Image
          src="/assets/cyan-dots.svg"
          alt="cyan dots"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
          sizes="(max-width: 768px) 20vw, 10vw"
        />
      </div>
      <div className={`modal-item__content ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ModalItem;
