import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_misc_assertCloneCustom_CommentTagLength =
  _test_misc_assertClone(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<CommentTagLength> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): CommentTagLength => {
        const __is = (input: any): input is CommentTagLength => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 <= input.fixed.length &&
            input.fixed.length <= 5 &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            input.maximum.length <= 7 &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            input.minimum_and_maximum.length <= 7 &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            input.equal.length <= 19;
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagLength => {
            const $guard = (typia.misc.assertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<CommentTagLength.Type>",
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
                          expected: "CommentTagLength.Type",
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
                        expected: "CommentTagLength.Type",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<CommentTagLength.Type>",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.fixed &&
                (5 <= input.fixed.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".fixed",
                      expected: "string & MinLength<5>",
                      value: input.fixed,
                    },
                    errorFactory,
                  )) &&
                (input.fixed.length <= 5 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".fixed",
                      expected: "string & MaxLength<5>",
                      value: input.fixed,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".fixed",
                    expected: "(string & MinLength<5> & MaxLength<5>)",
                    value: input.fixed,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.minimum &&
                (3 <= input.minimum.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum",
                      expected: "string & MinLength<3>",
                      value: input.minimum,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minimum",
                    expected: "(string & MinLength<3>)",
                    value: input.minimum,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.maximum &&
                (input.maximum.length <= 7 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maximum",
                      expected: "string & MaxLength<7>",
                      value: input.maximum,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".maximum",
                    expected: "(string & MaxLength<7>)",
                    value: input.maximum,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.minimum_and_maximum &&
                (3 <= input.minimum_and_maximum.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum_and_maximum",
                      expected: "string & MinLength<3>",
                      value: input.minimum_and_maximum,
                    },
                    errorFactory,
                  )) &&
                (input.minimum_and_maximum.length <= 7 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum_and_maximum",
                      expected: "string & MaxLength<7>",
                      value: input.minimum_and_maximum,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minimum_and_maximum",
                    expected: "(string & MinLength<3> & MaxLength<7>)",
                    value: input.minimum_and_maximum,
                  },
                  errorFactory,
                )) &&
              (("string" === typeof input.equal &&
                (10 <= input.equal.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "string & MinLength<10>",
                      value: input.equal,
                    },
                    errorFactory,
                  )) &&
                (input.equal.length <= 19 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "string & MaxLength<19>",
                      value: input.equal,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".equal",
                    expected: "(string & MinLength<10> & MaxLength<19>)",
                    value: input.equal,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagLength",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "CommentTagLength",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: CommentTagLength,
      ): import("typia").Resolved<CommentTagLength> => {
        const $io1 = (input: any): boolean =>
          "string" === typeof input.fixed &&
          5 <= input.fixed.length &&
          input.fixed.length <= 5 &&
          "string" === typeof input.minimum &&
          3 <= input.minimum.length &&
          "string" === typeof input.maximum &&
          input.maximum.length <= 7 &&
          "string" === typeof input.minimum_and_maximum &&
          3 <= input.minimum_and_maximum.length &&
          input.minimum_and_maximum.length <= 7 &&
          "string" === typeof input.equal &&
          10 <= input.equal.length &&
          input.equal.length <= 19;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co1(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          value: Array.isArray(input.value)
            ? $cp0(input.value)
            : (input.value as any),
        });
        const $co1 = (input: any): any => ({
          fixed: input.fixed as any,
          minimum: input.minimum as any,
          maximum: input.maximum as any,
          minimum_and_maximum: input.minimum_and_maximum as any,
          equal: input.equal as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    })(input, (p) => new CustomGuardError(p)),
  );
