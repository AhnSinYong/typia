import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_functional_isFunctionAsync_ObjectHttpFormData =
  _test_functional_isFunctionAsync("ObjectHttpFormData")(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
      async (input: ObjectHttpFormData): Promise<ObjectHttpFormData | null> => {
        if (
          false ===
          ((input: any): input is ObjectHttpFormData => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              Array.isArray(input.integers) &&
              input.integers.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  -2147483648 <= elem &&
                  elem <= 2147483647,
              ) &&
              input.blob instanceof Blob &&
              Array.isArray(input.blobs) &&
              input.blobs.every((elem: any) => elem instanceof Blob) &&
              input.file instanceof File &&
              Array.isArray(input.files) &&
              input.files.every((elem: any) => elem instanceof File);
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectHttpFormData => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            Array.isArray(input.integers) &&
            input.integers.every(
              (elem: any) =>
                "number" === typeof elem &&
                Math.floor(elem) === elem &&
                -2147483648 <= elem &&
                elem <= 2147483647,
            ) &&
            input.blob instanceof Blob &&
            Array.isArray(input.blobs) &&
            input.blobs.every((elem: any) => elem instanceof Blob) &&
            input.file instanceof File &&
            Array.isArray(input.files) &&
            input.files.every((elem: any) => elem instanceof File);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
