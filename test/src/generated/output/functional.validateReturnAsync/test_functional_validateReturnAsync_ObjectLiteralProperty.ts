import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_validateReturnAsync_ObjectLiteralProperty =
  _test_functional_validateReturnAsync("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      async (
        input: ObjectLiteralProperty,
      ): Promise<import("typia").IValidation<ObjectLiteralProperty>> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectLiteralProperty.ISomething> => {
          const errors = [] as any[];
          const __is = (
            input: any,
          ): input is ObjectLiteralProperty.ISomething => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" ===
                typeof (input as any)["something-interesting-do-you-want?"] &&
              "string" ===
                typeof (input as any)["or-something-crazy-do-you-want?"]
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty.ISomething => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" ===
                    typeof input["something-interesting-do-you-want?"] ||
                    $report(_exceptionable, {
                      path: _path + '["something-interesting-do-you-want?"]',
                      expected: "string",
                      value: input["something-interesting-do-you-want?"],
                    }),
                  "string" ===
                    typeof input["or-something-crazy-do-you-want?"] ||
                    $report(_exceptionable, {
                      path: _path + '["or-something-crazy-do-you-want?"]',
                      expected: "string",
                      value: input["or-something-crazy-do-you-want?"],
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectLiteralProperty.ISomething",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectLiteralProperty.ISomething",
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
