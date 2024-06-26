import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../../internal/_test_functional_assertParametersAsync";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_functional_assertParametersAsyncCustom_ArrayMatrix =
  _test_functional_assertParametersAsync(CustomGuardError)("ArrayMatrix")(
    ArrayMatrix,
  )(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      async (input: ArrayMatrix): Promise<ArrayMatrix> => {
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
        ): ArrayMatrix => {
          const __is = (input: any): input is ArrayMatrix => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.every(
                    (elem: any) =>
                      Array.isArray(elem) &&
                      elem.every(
                        (elem: any) =>
                          "number" === typeof elem && Number.isFinite(elem),
                      ),
                  ),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayMatrix => {
              const $guard = (typia.functional.assertParameters as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayMatrix",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "Array<Array<number>>",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        elem.every(
                          (elem: any, _index2: number) =>
                            ((Array.isArray(elem) ||
                              $guard(
                                true,
                                {
                                  path:
                                    _path +
                                    "[" +
                                    _index1 +
                                    "][" +
                                    _index2 +
                                    "]",
                                  expected: "Array<number>",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                              elem.every(
                                (elem: any, _index3: number) =>
                                  ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                  $guard(
                                    true,
                                    {
                                      path:
                                        _path +
                                        "[" +
                                        _index1 +
                                        "][" +
                                        _index2 +
                                        "][" +
                                        _index3 +
                                        "]",
                                      expected: "number",
                                      value: elem,
                                    },
                                    errorFactory,
                                  ),
                              )) ||
                            $guard(
                              true,
                              {
                                path:
                                  _path + "[" + _index1 + "][" + _index2 + "]",
                                expected: "Array<number>",
                                value: elem,
                              },
                              errorFactory,
                            ),
                        )) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "Array<Array<number>>",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayMatrix",
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
