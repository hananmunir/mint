import cx from "classnames";
import { ComponentProps, forwardRef } from "react";

type ButtonProps = {
  loading?: boolean;
} & ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, className, ...props }, ref) => {
    return (
      <button
        {...props}
        disabled={loading || disabled}
        className={cx(
          "__form_btn disabled:!shadow-none __btn_shadow relative",
          className,
        )}
      >
        <span
          className={cx(
            "relative z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-white",
            loading && "opacity-0",
          )}
        >
          Get started
        </span>

        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 z-10">
            <span className="h-1 w-1 animate-plop rounded-full bg-gray-2" />
            <span className="h-1 w-1 animate-plop2 rounded-full bg-gray-2" />
            <span className="h-1 w-1 animate-plop3 rounded-full bg-gray-2" />
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
