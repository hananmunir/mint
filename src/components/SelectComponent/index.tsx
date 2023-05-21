import { SelectComponentProps } from "@/config/types";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import React, { ComponentProps } from "react";
import cx from "classnames";

const SelectComponent = ({
  onValueChange,
  onOpenChange,
  placeholder,
  value,
  options,
  className,
}: SelectComponentProps) => {
  return (
    <div>
      <label htmlFor="projectType" className="__label mb-2">
        Project type
      </label>
      <Select.Root
        value={value}
        onOpenChange={onOpenChange}
        onValueChange={onValueChange}
      >
        <Select.Trigger
          id="projectType"
          className={cx(
            "relative [&>span]:line-clamp-1 text-left inline-flex w-full cursor-pointer select-none appearance-none items-center justify-between rounded-md border border-slate-6 bg-slate-4 text-sm focus:outline-none focus:ring-2 h-10 pl-3 pr-2 sm:text-sm focus:ring-slate-7 data-[placeholder]:!text-slate-11",
            className,
          )}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            style={{ zIndex: 9999999999 }}
            className="overflow-hidden border border-slate-6 bg-[#0D0D0D] rounded-md"
          >
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] cursor-default">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                <SelectItem
                  value=""
                  className="hover:bg-transparent focus:bg-transparent opacity-50"
                >
                  {placeholder}
                </SelectItem>

                {options.map((option, i) => (
                  <SelectItem key={i} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] cursor-default">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectComponent;

const SelectItem = React.forwardRef<any, ComponentProps<typeof Select.Item>>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "relative flex h-7 select-none items-center justify-between rounded-md pl-2 pr-1 text-sm outline-none text-slate-12 hover:bg-slate-4 focus:bg-slate-4 font-inter cursor-pointer",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute right-0 w-[25px] text-green-500 inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);
SelectItem.displayName = "SelectItem";
