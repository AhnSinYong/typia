import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonNull =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ToJsonNull")(
    ToJsonNull,
  )(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      async (input: ToJsonNull): Promise<ToJsonNull> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): ToJsonNull => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonNull => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
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
            ): input is ToJsonNull => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("function" === typeof input.toJSON ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".toJSON",
                      expected: "unknown",
                      value: input.toJSON,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
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
                      expected: "ToJsonNull",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonNull",
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
