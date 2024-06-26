import typia from "typia";

import { _test_functional_validateParameters } from "../../../internal/_test_functional_validateParameters";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_functional_validateParameters_TupleRestAtomic =
  _test_functional_validateParameters("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      (
        input: TupleRestAtomic,
      ): import("typia").IValidation<TupleRestAtomic> => {
        const paramResults = [
          ((input: any): typia.IValidation<TupleRestAtomic> => {
            const errors = [] as any[];
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
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TupleRestAtomic => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TupleRestAtomic",
                      value: input,
                    })) &&
                    [
                      "boolean" === typeof input[0] ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "boolean",
                          value: input[0],
                        }),
                      ("number" === typeof input[1] &&
                        Number.isFinite(input[1])) ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "number",
                          value: input[1],
                        }),
                    ].every((flag: boolean) => flag) &&
                    (((Array.isArray(input.slice(2)) ||
                      $report(true, {
                        path: _path + "",
                        expected: "...string",
                        value: input.slice(2),
                      })) &&
                      input
                        .slice(2)
                        .map(
                          (elem: any, _index1: number) =>
                            "string" === typeof elem ||
                            $report(true, {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "string",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(true, {
                        path: _path + "",
                        expected: "...string",
                        value: input.slice(2),
                      }))) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleRestAtomic",
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
        return {
          success: true,
          data: p(input),
          errors: [],
        };
      },
  );
