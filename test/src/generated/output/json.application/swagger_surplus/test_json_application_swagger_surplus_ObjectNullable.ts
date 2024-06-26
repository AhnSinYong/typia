import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_swagger_surplus_ObjectNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectNullable",
      },
    ],
    components: {
      schemas: {
        ObjectNullable: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IProduct": {
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            manufacturer: {
              $ref: "#/components/schemas/ObjectNullable.IManufacturer",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            brand: {
              $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            similar: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["name", "manufacturer", "brand", "similar"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IManufacturer": {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["manufacturer"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["type", "name"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IBrand.Nullable": {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["brand"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["type", "name"],
          "x-typia-jsDocTags": [],
        },
        "ObjectNullable.IManufacturer.Nullable": {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["manufacturer"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["type", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
