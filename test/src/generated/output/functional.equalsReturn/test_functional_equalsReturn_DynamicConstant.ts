import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_functional_equalsReturn_DynamicConstant =
  _test_functional_equalsReturn("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      (input: DynamicConstant): DynamicConstant | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is DynamicConstant => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io1(input.value, true && _exceptionable) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.a &&
            Number.isFinite(input.a) &&
            "number" === typeof input.b &&
            Number.isFinite(input.b) &&
            "number" === typeof input.c &&
            Number.isFinite(input.c) &&
            "number" === typeof input.d &&
            Number.isFinite(input.d) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["a", "b", "c", "d"].some((prop: any) => key === prop))
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
