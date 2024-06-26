import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_functional_isParametersAsync_DynamicArray =
  _test_functional_isParametersAsync("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => Promise<DynamicArray>) =>
      async (input: DynamicArray): Promise<DynamicArray | null> => {
        if (
          false ===
          ((input: any): input is DynamicArray => {
            const $io0 = (input: any): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              false === Array.isArray(input.value) &&
              $io1(input.value);
            const $io1 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  Array.isArray(value) &&
                  value.every((elem: any) => "string" === typeof elem)
                );
              });
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
