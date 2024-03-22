import { Box, Grid, ScrollArea } from "@radix-ui/themes";
import React, { ForwardedRef } from "react";

type Children = {
  children: React.ReactNode;
  inverted?: boolean;
};

export function DisplayGrid({ children, inverted }: Children) {
  return (
    <Grid
      display="grid"
      columns={{
        initial: "1",
        md: inverted ? "1fr 3fr" : "3fr 1fr",
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
      <Box
        ref={ref}
        style={{
          height: "calc(100vh - 20vh)",
        }}
      >
        {props.children}
      </Box>
    );
  }
);
DisplayGridBigColumn.displayName = "DisplayGridBigColumn";

export function DisplayGridSmallColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollArea
      size="1"
      type="auto"
      style={{
        height: "calc(100vh - 20vh)",
      }}
    >
      {children}
    </ScrollArea>
  );
}
