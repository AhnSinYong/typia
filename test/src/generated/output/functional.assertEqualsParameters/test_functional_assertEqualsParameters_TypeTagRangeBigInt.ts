import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../../internal/_test_functional_assertEqualsParameters";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsParameters_TypeTagRangeBigInt =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )(
    (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      (input: TypeTagRangeBigInt): TypeTagRangeBigInt => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsParameters as any)
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
        ): TypeTagRangeBigInt => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagRangeBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "bigint" === typeof input.greater &&
              BigInt(3) < input.greater &&
              "bigint" === typeof input.greater_equal &&
              BigInt(3) <= input.greater_equal &&
              "bigint" === typeof input.less &&
              input.less < BigInt(7) &&
              "bigint" === typeof input.less_equal &&
              input.less_equal <= BigInt(7) &&
              "bigint" === typeof input.greater_less &&
              BigInt(3) < input.greater_less &&
              input.greater_less < BigInt(7) &&
              "bigint" === typeof input.greater_equal_less &&
              BigInt(3) <= input.greater_equal_less &&
              input.greater_equal_less < BigInt(7) &&
              "bigint" === typeof input.greater_less_equal &&
              BigInt(3) < input.greater_less_equal &&
              input.greater_less_equal <= BigInt(7) &&
              "bigint" === typeof input.greater_equal_less_equal &&
              BigInt(3) <= input.greater_equal_less_equal &&
              input.greater_equal_less_equal <= BigInt(7) &&
              "bigint" === typeof input.equal &&
              BigInt(10) <= input.equal &&
              input.equal <= BigInt(10) &&
              (9 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "greater",
                      "greater_equal",
                      "less",
                      "less_equal",
                      "greater_less",
                      "greater_equal_less",
                      "greater_less_equal",
                      "greater_equal_less_equal",
                      "equal",
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
            ): input is TypeTagRangeBigInt => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagRangeBigInt.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagRangeBigInt.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagRangeBigInt.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagRangeBigInt.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
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
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("bigint" === typeof input.greater &&
                  (BigInt(3) < input.greater ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater",
                        expected: "bigint & ExclusiveMinimum<3n>",
                        value: input.greater,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater",
                      expected: "(bigint & ExclusiveMinimum<3n>)",
                      value: input.greater,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_equal &&
                  (BigInt(3) <= input.greater_equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal",
                        expected: "bigint & Minimum<3n>",
                        value: input.greater_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_equal",
                      expected: "(bigint & Minimum<3n>)",
                      value: input.greater_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.less &&
                  (input.less < BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".less",
                        expected: "bigint & ExclusiveMaximum<7n>",
                        value: input.less,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".less",
                      expected: "(bigint & ExclusiveMaximum<7n>)",
                      value: input.less,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.less_equal &&
                  (input.less_equal <= BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".less_equal",
                        expected: "bigint & Maximum<7n>",
                        value: input.less_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".less_equal",
                      expected: "(bigint & Maximum<7n>)",
                      value: input.less_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_less &&
                  (BigInt(3) < input.greater_less ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less",
                        expected: "bigint & ExclusiveMinimum<3n>",
                        value: input.greater_less,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_less < BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less",
                        expected: "bigint & ExclusiveMaximum<7n>",
                        value: input.greater_less,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_less",
                      expected:
                        "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
                      value: input.greater_less,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_equal_less &&
                  (BigInt(3) <= input.greater_equal_less ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less",
                        expected: "bigint & Minimum<3n>",
                        value: input.greater_equal_less,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_equal_less < BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less",
                        expected: "bigint & ExclusiveMaximum<7n>",
                        value: input.greater_equal_less,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_equal_less",
                      expected: "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                      value: input.greater_equal_less,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_less_equal &&
                  (BigInt(3) < input.greater_less_equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less_equal",
                        expected: "bigint & ExclusiveMinimum<3n>",
                        value: input.greater_less_equal,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_less_equal <= BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_less_equal",
                        expected: "bigint & Maximum<7n>",
                        value: input.greater_less_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_less_equal",
                      expected: "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                      value: input.greater_less_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.greater_equal_less_equal &&
                  (BigInt(3) <= input.greater_equal_less_equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less_equal",
                        expected: "bigint & Minimum<3n>",
                        value: input.greater_equal_less_equal,
                      },
                      errorFactory,
                    )) &&
                  (input.greater_equal_less_equal <= BigInt(7) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".greater_equal_less_equal",
                        expected: "bigint & Maximum<7n>",
                        value: input.greater_equal_less_equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".greater_equal_less_equal",
                      expected: "(bigint & Minimum<3n> & Maximum<7n>)",
                      value: input.greater_equal_less_equal,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.equal &&
                  (BigInt(10) <= input.equal ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "bigint & Minimum<10n>",
                        value: input.equal,
                      },
                      errorFactory,
                    )) &&
                  (input.equal <= BigInt(10) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "bigint & Maximum<10n>",
                        value: input.equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "(bigint & Minimum<10n> & Maximum<10n>)",
                      value: input.equal,
                    },
                    errorFactory,
                  )) &&
                (9 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                        "equal",
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
                      expected: "TypeTagRangeBigInt",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagRangeBigInt",
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
