import benchmark from "benchmark";

export namespace ValidateBenchmarker {
    export interface IOutput {
        name: string;
        "typescript-json": number;
        "io-ts": number | null;
        "class-validator": number | null;
        zod: number | null;
        typebox: number | null;
    }
    export interface IParameters<T> {
        "typescript-json": (input: T) => any;
        "io-ts": null | ((input: T) => any);
        "class-validator": null | ((input: T) => any);
        zod: null | ((input: T) => any);
        typebox: null | ((input: T) => any);
    }

    export function prepare<T>(
        name: string,
        generator: () => T,
        parameters: IParameters<T>,
    ): () => IOutput {
        const data: T = generator();

        const suite: benchmark.Suite = new benchmark.Suite();
        if (parameters["typebox"] !== null)
            suite.add("typebox", () => parameters["typebox"]!(data));
        if (parameters["io-ts"] !== null)
            suite.add("io-ts", () => parameters["io-ts"]!(data));
        if (parameters["zod"] !== null)
            suite.add("zod", () => parameters["zod"]!(data));
        if (parameters["class-validator"] !== null)
            suite.add("class-validator", () =>
                parameters["class-validator"]!(data),
            );
        suite.add("typescript-json", () => parameters["typescript-json"](data));

        return () => {
            const output: IOutput = {
                name,
                "typescript-json": 0,
                typebox: null,
                "io-ts": null,
                zod: null,
                "class-validator": null,
            };
            suite.run();
            suite.map((elem: benchmark) => {
                (output as any)[elem.name!] = elem.count / elem.times.elapsed;
            });
            return output;
        };
    }
}