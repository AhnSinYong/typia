import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagRange } from "../../structures/TagRange";

export const test_misc_validateClone_TagRange = _test_misc_validateClone(
    "TagRange",
)<TagRange>(TagRange)((input) => typia.misc.validateClone<TagRange>(input));