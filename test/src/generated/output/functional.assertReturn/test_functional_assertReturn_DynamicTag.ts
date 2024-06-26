import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_functional_assertReturn_DynamicTag =
  _test_functional_assertReturn(TypeGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      (input: DynamicTag): DynamicTag => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
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
        ): DynamicTag => {
          const __is = (input: any): input is DynamicTag => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (
                  "number" === typeof Number(key) &&
                  0 <= Number(key) &&
                  Number(key) < 10
                )
                  return "bigint" === typeof value && BigInt(0) <= value;
                if (
                  "string" === typeof key &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    key,
                  )
                )
                  return (
                    "string" === typeof value &&
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                      value,
                    )
                  );
                return true;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicTag => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $join = (typia.functional.assertReturn as any).join;
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
                    "number" === typeof Number(key) &&
                    0 <= Number(key) &&
                    Number(key) < 10
                  )
                    return (
                      ("bigint" === typeof value &&
                        (BigInt(0) <= value ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + $join(key),
                              expected: 'bigint & Type<"uint64">',
                              value: value,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: '(bigint & Type<"uint64">)',
                          value: value,
                        },
                        errorFactory,
                      )
                    );
                  if (
                    "string" === typeof key &&
                    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      key,
                    )
                  )
                    return (
                      ("string" === typeof value &&
                        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                          value,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + $join(key),
                              expected: 'string & Format<"email">',
                              value: value,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: '(string & Format<"email">)',
                          value: value,
                        },
                        errorFactory,
                      )
                    );
                  return true;
                });
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "DynamicTag",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "DynamicTag",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
