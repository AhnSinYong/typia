import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";

export const test_json_application_ajv_standard_ObjectUnionExplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionExplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicit",
      },
    ],
    components: {
      schemas: {
        ObjectUnionExplicit: {
          $id: "#/components/schemas/ObjectUnionExplicit",
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
              },
            ],
          },
        },
        "ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint": {
          $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            type: {
              type: "string",
              enum: ["point"],
            },
          },
          required: ["x", "y", "type"],
        },
        "ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine": {
          $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
            },
            type: {
              type: "string",
              enum: ["line"],
            },
          },
          required: ["p1", "p2", "type"],
        },
        "ObjectUnionExplicit.IPoint": {
          $id: "#/components/schemas/ObjectUnionExplicit.IPoint",
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
        },
        "ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              type: {
                type: "string",
                enum: ["triangle"],
              },
            },
            required: ["p1", "p2", "p3", "type"],
          },
        "ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p4: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              type: {
                type: "string",
                enum: ["rectangle"],
              },
            },
            required: ["p1", "p2", "p3", "p4", "type"],
          },
        "ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                },
              },
              type: {
                type: "string",
                enum: ["polyline"],
              },
            },
            required: ["points", "type"],
          },
        "ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
            type: "object",
            properties: {
              outer: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
              },
              inner: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                },
              },
              type: {
                type: "string",
                enum: ["polygon"],
              },
            },
            required: ["outer", "inner", "type"],
          },
        "ObjectUnionExplicit.IPolyline": {
          $id: "#/components/schemas/ObjectUnionExplicit.IPolyline",
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
            },
          },
          required: ["points"],
        },
        "ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle": {
          $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
            },
            radius: {
              type: "number",
            },
            type: {
              type: "string",
              enum: ["circle"],
            },
          },
          required: ["centroid", "radius", "type"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
