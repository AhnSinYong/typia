import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_functional_isFunctionAsync_ClassGetter =
  _test_functional_isFunctionAsync("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => Promise<ClassGetter>) =>
      async (input: ClassGetter): Promise<ClassGetter | null> => {
        if (
          false ===
          ((input: any): input is ClassGetter.Person => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              (null === input.dead || "boolean" === typeof input.dead);
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ClassGetter.Person => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
