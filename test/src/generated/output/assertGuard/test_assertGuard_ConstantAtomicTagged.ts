import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_assertGuard_ConstantAtomicTagged = _test_assertGuard(
  TypeGuardError,
)("ConstantAtomicTagged")<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ConstantAtomicTagged => {
    const __is = (input: any): input is ConstantAtomicTagged => {
      const $io0 = (input: any): boolean =>
        ("latest" === input.id ||
          ("string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ))) &&
        (-1 === input.age ||
          ("number" === typeof input.age &&
            Math.floor(input.age) === input.age &&
            0 <= input.age &&
            input.age <= 4294967295 &&
            input.age <= 100));
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicTagged => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("latest" === input.id ||
            ("string" === typeof input.id &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: 'string & Format<"uuid">',
                    value: input.id,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: '("latest" | (string & Format<"uuid">))',
                value: input.id,
              },
              errorFactory,
            )) &&
          (-1 === input.age ||
            ("number" === typeof input.age &&
              ((Math.floor(input.age) === input.age &&
                0 <= input.age &&
                input.age <= 4294967295) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: 'number & Type<"uint32">',
                    value: input.age,
                  },
                  errorFactory,
                )) &&
              (input.age <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "number & Maximum<100>",
                    value: input.age,
                  },
                  errorFactory,
                ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".age",
                expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
                value: input.age,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantAtomicTagged",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ConstantAtomicTagged",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input),
);
