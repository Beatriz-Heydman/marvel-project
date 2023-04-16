export type FlexProps = {
  gap?: string;
  direction?: "column" | "row";
  alignItems?: "flex-start" | "flex-end" | "center";
  flexWrap?: "nowrap" | "wrap";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
};
