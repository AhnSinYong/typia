import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_random_ArrayRecursiveUnionExplicitPointer = _test_random(
  "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<ArrayRecursiveUnionExplicitPointer> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.array ?? $generator.array)(() =>
          $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        ),
      });
      const $ro1 = (_recursive: boolean = true, _depth: number = 0): any => ({
        value: $pick([
          () => $ro2(true, _recursive ? 1 + _depth : _depth),
          () => $ro3(true, _recursive ? 1 + _depth : _depth),
          () => $ro4(true, _recursive ? 1 + _depth : _depth),
          () => $ro5(true, _recursive ? 1 + _depth : _depth),
          () => $ro6(true, _recursive ? 1 + _depth : _depth),
        ])(),
      });
      const $ro2 = (_recursive: boolean = true, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        path:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        children:
          _recursive && 5 < _depth
            ? []
            : 5 >= _depth
              ? (generator?.array ?? $generator.array)(() =>
                  $ro1(true, _recursive ? 1 + _depth : _depth),
                )
              : [],
        type: "directory",
      });
      const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        path:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        width:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        height:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        url:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        size:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        type: "file",
        extension: "jpg",
      });
      const $ro4 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        path:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        size:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        content:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        type: "file",
        extension: "txt",
      });
      const $ro5 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        path:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        size:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        count:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        type: "file",
        extension: "zip",
      });
      const $ro6 = (_recursive: boolean = true, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        path:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        target: $ro1(true, _recursive ? 1 + _depth : _depth),
        type: "file",
        extension: "lnk",
      });
      return $ro0();
    })((ArrayRecursiveUnionExplicitPointer as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ArrayRecursiveUnionExplicitPointer => {
    const __is = (input: any): input is ArrayRecursiveUnionExplicitPointer => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $iu0(input.value);
      const $io2 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        Array.isArray(input.children) &&
        input.children.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        ) &&
        "directory" === input.type;
      const $io3 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.width &&
        Number.isFinite(input.width) &&
        "number" === typeof input.height &&
        Number.isFinite(input.height) &&
        "string" === typeof input.url &&
        "number" === typeof input.size &&
        Number.isFinite(input.size) &&
        "file" === input.type &&
        "jpg" === input.extension;
      const $io4 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.size &&
        Number.isFinite(input.size) &&
        "string" === typeof input.content &&
        "file" === input.type &&
        "txt" === input.extension;
      const $io5 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.size &&
        Number.isFinite(input.size) &&
        "number" === typeof input.count &&
        Number.isFinite(input.count) &&
        "file" === input.type &&
        "zip" === input.extension;
      const $io6 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "object" === typeof input.target &&
        null !== input.target &&
        $io1(input.target) &&
        "file" === input.type &&
        "lnk" === input.extension;
      const $iu0 = (input: any): any =>
        (() => {
          if ("directory" === input.type) return $io2(input);
          else if ("jpg" === input.extension) return $io3(input);
          else if ("txt" === input.extension) return $io4(input);
          else if ("zip" === input.extension) return $io5(input);
          else if ("lnk" === input.extension) return $io6(input);
          else return false;
        })();
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayRecursiveUnionExplicitPointer => {
        const $guard = (typia.createAssert as any).guard;
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
                expected: "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
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
                      expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
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
                    expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
              value: input.value,
            },
            errorFactory,
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected:
                  "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.IShortcut | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile)",
                value: input.value,
              },
              errorFactory,
            )) &&
            $au0(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected:
                "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.IShortcut | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile)",
              value: input.value,
            },
            errorFactory,
          );
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.path ||
            $guard(
              _exceptionable,
              {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              },
              errorFactory,
            )) &&
          (((Array.isArray(input.children) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".children",
                expected:
                  "Array<ArrayRecursiveUnionExplicitPointer.IBucket>.o1",
                value: input.children,
              },
              errorFactory,
            )) &&
            input.children.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children[" + _index2 + "]",
                      expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    elem,
                    _path + ".children[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".children[" + _index2 + "]",
                    expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".children",
                expected:
                  "Array<ArrayRecursiveUnionExplicitPointer.IBucket>.o1",
                value: input.children,
              },
              errorFactory,
            )) &&
          ("directory" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"directory"',
                value: input.type,
              },
              errorFactory,
            ));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.path ||
            $guard(
              _exceptionable,
              {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.width && Number.isFinite(input.width)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".width",
                expected: "number",
                value: input.width,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.height &&
            Number.isFinite(input.height)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".height",
                expected: "number",
                value: input.height,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.url ||
            $guard(
              _exceptionable,
              {
                path: _path + ".url",
                expected: "string",
                value: input.url,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.size && Number.isFinite(input.size)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".size",
                expected: "number",
                value: input.size,
              },
              errorFactory,
            )) &&
          ("file" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("jpg" === input.extension ||
            $guard(
              _exceptionable,
              {
                path: _path + ".extension",
                expected: '"jpg"',
                value: input.extension,
              },
              errorFactory,
            ));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.path ||
            $guard(
              _exceptionable,
              {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.size && Number.isFinite(input.size)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".size",
                expected: "number",
                value: input.size,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.content ||
            $guard(
              _exceptionable,
              {
                path: _path + ".content",
                expected: "string",
                value: input.content,
              },
              errorFactory,
            )) &&
          ("file" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("txt" === input.extension ||
            $guard(
              _exceptionable,
              {
                path: _path + ".extension",
                expected: '"txt"',
                value: input.extension,
              },
              errorFactory,
            ));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.path ||
            $guard(
              _exceptionable,
              {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.size && Number.isFinite(input.size)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".size",
                expected: "number",
                value: input.size,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.count && Number.isFinite(input.count)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".count",
                expected: "number",
                value: input.count,
              },
              errorFactory,
            )) &&
          ("file" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("zip" === input.extension ||
            $guard(
              _exceptionable,
              {
                path: _path + ".extension",
                expected: '"zip"',
                value: input.extension,
              },
              errorFactory,
            ));
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.path ||
            $guard(
              _exceptionable,
              {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.target && null !== input.target) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".target",
                expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                value: input.target,
              },
              errorFactory,
            )) &&
            $ao1(input.target, _path + ".target", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".target",
                expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                value: input.target,
              },
              errorFactory,
            )) &&
          ("file" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("lnk" === input.extension ||
            $guard(
              _exceptionable,
              {
                path: _path + ".extension",
                expected: '"lnk"',
                value: input.extension,
              },
              errorFactory,
            ));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ("directory" === input.type)
              return $ao2(input, _path, true && _exceptionable);
            else if ("jpg" === input.extension)
              return $ao3(input, _path, true && _exceptionable);
            else if ("txt" === input.extension)
              return $ao4(input, _path, true && _exceptionable);
            else if ("zip" === input.extension)
              return $ao5(input, _path, true && _exceptionable);
            else if ("lnk" === input.extension)
              return $ao6(input, _path, true && _exceptionable);
            else
              return $guard(
                _exceptionable,
                {
                  path: _path,
                  expected:
                    "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                  value: input,
                },
                errorFactory,
              );
          })();
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayRecursiveUnionExplicitPointer",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ArrayRecursiveUnionExplicitPointer",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
