import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_createAssertStringify_AtomicSimple =
  _test_json_assertStringify(TypeGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): AtomicSimple => {
        const __is = (input: any): input is AtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is AtomicSimple => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "AtomicSimple",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 3 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "[boolean, number, string]",
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
                ("string" === typeof input[2] ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "string",
                      value: input[2],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "AtomicSimple",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: AtomicSimple): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
