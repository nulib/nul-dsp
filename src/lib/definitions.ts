import { Work } from "@nulib/dcapi-types";

type NULWork = Work & {
  canonical_link: string;
};

type ThinData = {
  id: string;
  title: string;
  x: number;
  y: number;
  z: number;
};

type Thin2DData = Omit<ThinData, "z">;

type WorkPartial = Pick<
  NULWork,
  "canonical_link" | "collection" | "description" | "id" | "thumbnail" | "title"
>;

export { type NULWork, type ThinData, type Thin2DData, type WorkPartial };
