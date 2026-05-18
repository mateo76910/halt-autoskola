import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Color = "white" | "green";
type Variant = "solid" | "outline";

type BaseProps = {
  children: React.ReactNode;
  roundedIcon?: boolean;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  className?: string;
  color?: Color;
  variant?: Variant;
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type LinkProps = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type Props = ButtonProps | LinkProps;

const base =
  "font-nunito text-md inline-flex items-center relative gap-2 text-white-500 leading-5 px-4 py-2 bg-transparent cursor-pointer border rounded-[2.5rem] transition-all duration-250 pb-[10px]";

const disabledCls =
  "opacity-50 cursor-not-allowed border-green-600 hover:border-green-600 bg-transparent text-white-50 hover:text-white-50";

export function Button(props: Props) {
  const {
    children,
    leftElement,
    rightElement,
    roundedIcon,
    className,
    color = "green",
    variant = "outline",
  } = props;

  const colorCls =
    color === "white"
      ? "border-white-300 hover:border-white-00 text-white-500 hover:text-white-00"
      : "border-green-500 hover:border-green-600 text-white-500 hover:text-white-00";
  const variantCls =
    variant === "outline"
      ? "bg-transparent"
      : "bg-white-500 text-black-500 hover:bg-white-300 hover:text-black-500 border-white-500";

  const cls = cn(
    base,
    roundedIcon && "pr-[3rem]",
    colorCls,
    variantCls,
    "disabled" in props && props.disabled && disabledCls,
    className,
  );

  const content = (
    <>
      {leftElement && (
        <span className="flex mt-0.5 items-center justify-center">
          {leftElement}
        </span>
      )}
      {children}
      {rightElement && (
        <span
          className={cn(
            roundedIcon
              ? "absolute right-[-1px] bottom-0 top-0 h-[2.375rem] rounded-full w-[2.375rem] text-black-500 flex items-center justify-center bg-green-500"
              : "flex items-center justify-center",
          )}
        >
          {rightElement}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {content}
      </Link>
    );
  }

  const { onClick, type, disabled, ...rest } = props as ButtonProps;
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cls}
      {...Object.fromEntries(
        Object.entries(rest).filter(
          ([k]) =>
            !["children", "leftElement", "rightElement", "roundedIcon", "color", "variant", "className"].includes(
              k,
            ),
        ),
      )}
    >
      {content}
    </button>
  );
}
