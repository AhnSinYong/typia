import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_functional_equalsFunctionAsync_ObjectHttpAtomic =
  _test_functional_equalsFunctionAsync("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      async (input: ObjectHttpAtomic): Promise<ObjectHttpAtomic | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpAtomic => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "boolean" === typeof input.boolean &&
              "bigint" === typeof input.bigint &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              "string" === typeof input.string &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["boolean", "bigint", "number", "string"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectHttpAtomic => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "boolean" === typeof input.boolean &&
            "bigint" === typeof input.bigint &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["boolean", "bigint", "number", "string"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
