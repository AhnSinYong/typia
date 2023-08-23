import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_isStringify_TagMatrix = _test_json_isStringify(
    "TagMatrix",
)<TagMatrix>(TagMatrix)(typia.json.createIsStringify<TagMatrix>());