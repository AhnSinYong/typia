import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_createAssertGuardCustom_TupleRestAtomic = _test_assertGuard(
  CustomGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): asserts input is TupleRestAtomic => {
    const __is = (input: any): input is TupleRestAtomic => {
      return (
        Array.isArray(input) &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        Array.isArray(input.slice(2)) &&
        input.slice(2).every((elem: any) => "string" === typeof elem)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TupleRestAtomic => {
        const $guard = (typia.createAssertGuard as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TupleRestAtomic",
                value: input,
              },
              errorFactory,
            )) &&
            ("boolean" === typeof input[0] ||
              $guard(
                true,
                {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                },
                errorFactory,
              )) &&
            (("number" === typeof input[1] && Number.isFinite(input[1])) ||
              $guard(
                true,
                {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.slice(2)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "...string",
                  value: input.slice(2),
                },
                errorFactory,
              )) &&
              input.slice(2).every(
                (elem: any, _index1: number) =>
                  "string" === typeof elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + (2 + _index1) + "]",
                      expected: "string",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "...string",
                  value: input.slice(2),
                },
                errorFactory,
              ))) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TupleRestAtomic",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);
