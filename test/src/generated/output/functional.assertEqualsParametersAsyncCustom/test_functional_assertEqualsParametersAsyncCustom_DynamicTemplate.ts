import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicTemplate =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "DynamicTemplate",
  )(DynamicTemplate)(
    (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      async (input: DynamicTemplate): Promise<DynamicTemplate> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): DynamicTemplate => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is DynamicTemplate => {
            const $join = (typia.functional.assertEqualsParameters as any).join;
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                    key,
                  )
                )
                  return "number" === typeof value && Number.isFinite(value);
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return "boolean" === typeof value;
                return false;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicTemplate => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  if (
                    "string" === typeof key &&
                    RegExp(/^prefix_(.*)/).test(key)
                  )
                    return (
                      "string" === typeof value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "string",
                          value: value,
                        },
                        errorFactory,
                      )
                    );
                  if (
                    "string" === typeof key &&
                    RegExp(/(.*)_postfix$/).test(key)
                  )
                    return (
                      "string" === typeof value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "string",
                          value: value,
                        },
                        errorFactory,
                      )
                    );
                  if (
                    "string" === typeof key &&
                    RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                      key,
                    )
                  )
                    return (
                      ("number" === typeof value && Number.isFinite(value)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "number",
                          value: value,
                        },
                        errorFactory,
                      )
                    );
                  if (
                    "string" === typeof key &&
                    RegExp(
                      /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(key)
                  )
                    return (
                      "boolean" === typeof value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "boolean",
                          value: value,
                        },
                        errorFactory,
                      )
                    );
                  return $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    },
                    errorFactory,
                  );
                });
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "DynamicTemplate",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "DynamicTemplate",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
