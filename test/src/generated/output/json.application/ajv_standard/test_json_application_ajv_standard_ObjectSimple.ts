import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectSimple } from "../../../../structures/ObjectSimple";

export const test_json_application_ajv_standard_ObjectSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectSimple.IBox3D",
      },
    ],
    components: {
      schemas: {
        "ObjectSimple.IBox3D": {
          $id: "#/components/schemas/ObjectSimple.IBox3D",
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
            position: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
            rotate: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
            pivot: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
            },
          },
          required: ["scale", "position", "rotate", "pivot"],
        },
        "ObjectSimple.IPoint3D": {
          $id: "#/components/schemas/ObjectSimple.IPoint3D",
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            z: {
              type: "number",
            },
          },
          required: ["x", "y", "z"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
