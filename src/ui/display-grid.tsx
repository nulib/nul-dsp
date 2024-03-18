import { Box, Grid } from "@radix-ui/themes";
import React, { ForwardedRef } from "react";

import clsx from "clsx";

type Children = {
  children: React.ReactNode;
};

export function DisplayGrid({ children }: Children) {
  return (
    <Grid
      display="grid"
      columns={{
        initial: "1",
        md: "3fr 1fr",
      }}
      justify="between"
      width="100%"
    >
      {children}
    </Grid>
  );
}

export const DisplayGridBigColumn = React.forwardRef(
  (props: Children, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Box ref={ref} className="h-120">
        {props.children}
      </Box>
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
  console.log("classNames", classNames);
  return (
    <Box
      className={clsx(`overflow-auto lg:h-120 h-64`, classNames && classNames)}
    >
      {children}
    </Box>
  );
}
