import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsFunctionAsync_ObjectLiteralProperty =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectLiteralProperty",
  )(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      async (input: ObjectLiteralProperty): Promise<ObjectLiteralProperty> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsFunction as any)
          .errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectLiteralProperty.ISomething => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectLiteralProperty.ISomething => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input["something-interesting-do-you-want?"] &&
              "string" === typeof input["or-something-crazy-do-you-want?"] &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "something-interesting-do-you-want?",
                      "or-something-crazy-do-you-want?",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty.ISomething => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" ===
                  typeof input["something-interesting-do-you-want?"] ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["something-interesting-do-you-want?"]',
                      expected: "string",
                      value: input["something-interesting-do-you-want?"],
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input["or-something-crazy-do-you-want?"] ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["or-something-crazy-do-you-want?"]',
                      expected: "string",
                      value: input["or-something-crazy-do-you-want?"],
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "something-interesting-do-you-want?",
                        "or-something-crazy-do-you-want?",
                      ].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectLiteralProperty.ISomething",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectLiteralProperty.ISomething",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectLiteralProperty.ISomething => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectLiteralProperty.ISomething => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input["something-interesting-do-you-want?"] &&
              "string" === typeof input["or-something-crazy-do-you-want?"] &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "something-interesting-do-you-want?",
                      "or-something-crazy-do-you-want?",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty.ISomething => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" ===
                  typeof input["something-interesting-do-you-want?"] ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["something-interesting-do-you-want?"]',
                      expected: "string",
                      value: input["something-interesting-do-you-want?"],
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input["or-something-crazy-do-you-want?"] ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + '["or-something-crazy-do-you-want?"]',
                      expected: "string",
                      value: input["or-something-crazy-do-you-want?"],
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "something-interesting-do-you-want?",
                        "or-something-crazy-do-you-want?",
                      ].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectLiteralProperty.ISomething",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectLiteralProperty.ISomething",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
