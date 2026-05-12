import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "jogwangjo_history_institute",
  title: "조광조 역사연구원 CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id("root")
          .title("콘텐츠")
          .items([
            S.documentTypeListItem("post").title("게시글"),
            S.documentTypeListItem("pilgrimage").title("답사"),
            S.documentTypeListItem("lecture").title("강의·아카데미"),
            S.documentTypeListItem("person").title("인물"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: schemaTypes },
});
