import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_functional_assertFunction_ArrayRecursive =
  _test_functional_assertFunction(TypeGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )(
    (p: (input: ArrayRecursive) => ArrayRecursive) =>
      (input: ArrayRecursive): ArrayRecursive => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
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
        ): ArrayRecursive.ICategory => {
          const __is = (input: any): input is ArrayRecursive.ICategory => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.children) &&
              input.children.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              ) &&
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "number" === typeof input.sequence &&
              Number.isFinite(input.sequence) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              "number" === typeof (input.created_at as any).time &&
              Number.isFinite((input.created_at as any).time) &&
              "number" === typeof (input.created_at as any).zone &&
              Number.isFinite((input.created_at as any).zone);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRecursive.ICategory => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.children) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursive.ICategory>",
                      value: input.children,
                    },
                    errorFactory,
                  )) &&
                  input.children.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".children[" + _index1 + "]",
                            expected: "ArrayRecursive.ICategory",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(
                          elem,
                          _path + ".children[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".children[" + _index1 + "]",
                          expected: "ArrayRecursive.ICategory",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursive.ICategory>",
                      value: input.children,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.code ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".code",
                      expected: "string",
                      value: input.code,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sequence",
                      expected: "number",
                      value: input.sequence,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".created_at",
                      expected: "ArrayRecursive.ITimestamp",
                      value: input.created_at,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".created_at",
                      expected: "ArrayRecursive.ITimestamp",
                      value: input.created_at,
                    },
                    errorFactory,
                  ));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.time &&
                  Number.isFinite(input.time)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".time",
                      expected: "number",
                      value: input.time,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.zone &&
                  Number.isFinite(input.zone)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".zone",
                      expected: "number",
                      value: input.zone,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayRecursive.ICategory",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayRecursive.ICategory",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
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
        ): ArrayRecursive.ICategory => {
          const __is = (input: any): input is ArrayRecursive.ICategory => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.children) &&
              input.children.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              ) &&
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "number" === typeof input.sequence &&
              Number.isFinite(input.sequence) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              "number" === typeof (input.created_at as any).time &&
              Number.isFinite((input.created_at as any).time) &&
              "number" === typeof (input.created_at as any).zone &&
              Number.isFinite((input.created_at as any).zone);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRecursive.ICategory => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.children) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursive.ICategory>",
                      value: input.children,
                    },
                    errorFactory,
                  )) &&
                  input.children.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".children[" + _index1 + "]",
                            expected: "ArrayRecursive.ICategory",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(
                          elem,
                          _path + ".children[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".children[" + _index1 + "]",
                          expected: "ArrayRecursive.ICategory",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursive.ICategory>",
                      value: input.children,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.code ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".code",
                      expected: "string",
                      value: input.code,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sequence",
                      expected: "number",
                      value: input.sequence,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".created_at",
                      expected: "ArrayRecursive.ITimestamp",
                      value: input.created_at,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".created_at",
                      expected: "ArrayRecursive.ITimestamp",
                      value: input.created_at,
                    },
                    errorFactory,
                  ));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.time &&
                  Number.isFinite(input.time)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".time",
                      expected: "number",
                      value: input.time,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.zone &&
                  Number.isFinite(input.zone)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".zone",
                      expected: "number",
                      value: input.zone,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayRecursive.ICategory",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayRecursive.ICategory",
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
