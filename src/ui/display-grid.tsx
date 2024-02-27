import React, { ForwardedRef } from "react";

import clsx from "clsx";

type Children = {
  children: React.ReactNode;
};

export function DisplayGrid({ children }: Children) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 ">{children}</div>
  );
}

export const DisplayGridBigColumn = React.forwardRef(
  (props: Children, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className="lg:col-span-9 h-120">
        {props.children}
      </div>
    );
  }
);
DisplayGridBigColumn.displayName = "DisplayGridBigColumn";

export function DisplayGridSmallColumn({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div
      className={clsx(
        `overflow-auto lg:col-span-3 lg:h-120 h-64`,
        classNames && classNames
      )}
    >
      {children}
    </div>
  );
}
