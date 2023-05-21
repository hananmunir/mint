import classNames from "classnames";
import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  text: string;
  keyboardCommand: string;
  className?: string;
};

const Tooltip = ({
  children,
  keyboardCommand,
  text,
  className,
}: TooltipProps) => {
  return (
    <div className={classNames("group relative", className)}>
      {children}

      <div className="z-30 whitespace-nowrap absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] font-roboto -translate-y-2 opacity-0 pointer-events-none duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto peer-focus:opacity-100 peer-focus:translate-y-0 peer-focus:pointer-events-auto max-w-[250px] select-none rounded-md border border-slate-6 bg-root px-2 py-1 text-sm inline-flex items-center gap-2">
        {text}
        <kbd className="inline-flex h-[22px] w-[22px] select-none items-center justify-center rounded text-sm uppercase bg-slate-4 text-slate-11 border border-slate-6">
          {keyboardCommand}
        </kbd>
        {/* <span
          style={{
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            whiteSpace: "nowrap",
            overflowWrap: "normal",
          }}
        >
          Go to sign up
          <kbd className="inline-flex h-[22px] shrink-0 w-[22px] select-none items-center justify-center rounded text-sm uppercase bg-slate-4 text-slate-11 border border-slate-6">
            s
          </kbd>
        </span> */}
      </div>
    </div>
  );
};

export default Tooltip;
