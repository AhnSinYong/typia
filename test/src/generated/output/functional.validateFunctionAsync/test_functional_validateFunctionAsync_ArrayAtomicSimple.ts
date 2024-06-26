import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_functional_validateFunctionAsync_ArrayAtomicSimple =
  _test_functional_validateFunctionAsync("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      async (
        input: ArrayAtomicSimple,
      ): Promise<import("typia").IValidation<ArrayAtomicSimple>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ArrayAtomicSimple> => {
            const errors = [] as any[];
            const __is = (input: any): input is ArrayAtomicSimple => {
              return (
                Array.isArray(input) &&
                input.length === 3 &&
                Array.isArray(input[0]) &&
                input[0].every((elem: any) => "boolean" === typeof elem) &&
                Array.isArray(input[1]) &&
                input[1].every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ) &&
                Array.isArray(input[2]) &&
                input[2].every((elem: any) => "string" === typeof elem)
              );
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ArrayAtomicSimple => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ArrayAtomicSimple",
                      value: input,
                    })) &&
                    (input.length === 3 ||
                      $report(true, {
                        path: _path + "",
                        expected:
                          "[Array<boolean>, Array<number>, Array<string>]",
                        value: input,
                      })) &&
                    [
                      ((Array.isArray(input[0]) ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "Array<boolean>",
                          value: input[0],
                        })) &&
                        input[0]
                          .map(
                            (elem: any, _index1: number) =>
                              "boolean" === typeof elem ||
                              $report(true, {
                                path: _path + "[0][" + _index1 + "]",
                                expected: "boolean",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "Array<boolean>",
                          value: input[0],
                        }),
                      ((Array.isArray(input[1]) ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "Array<number>",
                          value: input[1],
                        })) &&
                        input[1]
                          .map(
                            (elem: any, _index2: number) =>
                              ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                              $report(true, {
                                path: _path + "[1][" + _index2 + "]",
                                expected: "number",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "Array<number>",
                          value: input[1],
                        }),
                      ((Array.isArray(input[2]) ||
                        $report(true, {
                          path: _path + "[2]",
                          expected: "Array<string>",
                          value: input[2],
                        })) &&
                        input[2]
                          .map(
                            (elem: any, _index3: number) =>
                              "string" === typeof elem ||
                              $report(true, {
                                path: _path + "[2][" + _index3 + "]",
                                expected: "string",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                        $report(true, {
                          path: _path + "[2]",
                          expected: "Array<string>",
                          value: input[2],
                        }),
                    ].every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayAtomicSimple",
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
        const result = ((input: any): typia.IValidation<ArrayAtomicSimple> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayAtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              Array.isArray(input[0]) &&
              input[0].every((elem: any) => "boolean" === typeof elem) &&
              Array.isArray(input[1]) &&
              input[1].every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input[2]) &&
              input[2].every((elem: any) => "string" === typeof elem)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayAtomicSimple => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayAtomicSimple",
                    value: input,
                  })) &&
                  (input.length === 3 ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "[Array<boolean>, Array<number>, Array<string>]",
                      value: input,
                    })) &&
                  [
                    ((Array.isArray(input[0]) ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "Array<boolean>",
                        value: input[0],
                      })) &&
                      input[0]
                        .map(
                          (elem: any, _index1: number) =>
                            "boolean" === typeof elem ||
                            $report(true, {
                              path: _path + "[0][" + _index1 + "]",
                              expected: "boolean",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "Array<boolean>",
                        value: input[0],
                      }),
                    ((Array.isArray(input[1]) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "Array<number>",
                        value: input[1],
                      })) &&
                      input[1]
                        .map(
                          (elem: any, _index2: number) =>
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
                            $report(true, {
                              path: _path + "[1][" + _index2 + "]",
                              expected: "number",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "Array<number>",
                        value: input[1],
                      }),
                    ((Array.isArray(input[2]) ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "Array<string>",
                        value: input[2],
                      })) &&
                      input[2]
                        .map(
                          (elem: any, _index3: number) =>
                            "string" === typeof elem ||
                            $report(true, {
                              path: _path + "[2][" + _index3 + "]",
                              expected: "string",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "Array<string>",
                        value: input[2],
                      }),
                  ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayAtomicSimple",
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
