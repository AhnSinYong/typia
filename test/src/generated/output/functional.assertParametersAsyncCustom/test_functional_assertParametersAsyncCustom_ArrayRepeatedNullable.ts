import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedNullable =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ArrayRepeatedNullable",
  )(ArrayRepeatedNullable)(
    (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
      async (input: ArrayRepeatedNullable): Promise<ArrayRepeatedNullable> => {
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
        ): ArrayRepeatedNullable => {
          const __is = (input: any): input is ArrayRepeatedNullable => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  undefined !== elem &&
                  (null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              undefined !== input &&
              (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRepeatedNullable => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $aa0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input.every(
                  (elem: any, _index1: number) =>
                    (undefined !== elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (null === elem ||
                      "string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      ((Array.isArray(elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedNullable> | null | number | string)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        ($aa0(
                          elem,
                          _path + "[" + _index1 + "]",
                          true && _exceptionable,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<ArrayRepeatedNullable>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )),
                );
              return (
                (undefined !== input ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (null === input ||
                  "string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  ((Array.isArray(input) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "(Array<ArrayRepeatedNullable> | null | number | string)",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                    ($aa0(input, _path + "", true && _exceptionable) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "",
                          expected: "Array<ArrayRepeatedNullable>",
                          value: input,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                      value: input,
                    },
                    errorFactory,
                  ))
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
