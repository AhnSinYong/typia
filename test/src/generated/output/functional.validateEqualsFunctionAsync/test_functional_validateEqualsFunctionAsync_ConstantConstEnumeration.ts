import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_functional_validateEqualsFunctionAsync_ConstantConstEnumeration =
  _test_functional_validateEqualsFunctionAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) =>
      async (
        input: ConstantConstEnumeration,
      ): Promise<import("typia").IValidation<ConstantConstEnumeration>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ConstantConstEnumeration> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ConstantConstEnumeration => {
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any, _index1: number) =>
                    0 === elem ||
                    1 === elem ||
                    2 === elem ||
                    "Four" === elem ||
                    "Three" === elem,
                )
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ConstantConstEnumeration => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ConstantConstEnumeration",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          0 === elem ||
                          1 === elem ||
                          2 === elem ||
                          "Four" === elem ||
                          "Three" === elem ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: '("Four" | "Three" | 0 | 1 | 2)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantConstEnumeration",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((
          input: any,
        ): typia.IValidation<ConstantConstEnumeration> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantConstEnumeration => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Four" === elem ||
                  "Three" === elem,
              )
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantConstEnumeration => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantConstEnumeration",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        0 === elem ||
                        1 === elem ||
                        2 === elem ||
                        "Four" === elem ||
                        "Three" === elem ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: '("Four" | "Three" | 0 | 1 | 2)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantConstEnumeration",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
