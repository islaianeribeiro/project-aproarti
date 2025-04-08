import React from "react";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  icon,
  href,
  ariaLabel,
  type = "button",
}) => {
  const content = (
    <span className="flex items-center gap-2">
      {icon && <span>{icon}</span>}
      {text}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
