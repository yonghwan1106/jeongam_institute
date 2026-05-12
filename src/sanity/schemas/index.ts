import { SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { pilgrimage } from "./pilgrimage";
import { lecture } from "./lecture";
import { person } from "./person";

export const schemaTypes: SchemaTypeDefinition[] = [post, pilgrimage, lecture, person];
