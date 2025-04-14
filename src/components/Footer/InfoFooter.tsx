import { ReactNode } from "react";
import clsx from "clsx";

type ParagraphContent = {
  icon?: ReactNode;
  text: string;
};

interface InfoFooterProps {
  title: string;
  paragraphs: ParagraphContent[];
  className?: string;
}

export default function InfoFooter({
  title,
  paragraphs,
  className,
}: InfoFooterProps) {
  return (
    <div className={clsx("w-auto md:w-125", className)}>
      <h3 className="text-xl font-semibold mb-4 text-terracota">{title}</h3>
      <div className="space-y-2">
        {paragraphs.map((item, index) => (
          <p
            key={index}
            className={clsx(item.icon && "flex items-center gap-2")}
          >
            {item.icon && item.icon}
            <span>{item.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
