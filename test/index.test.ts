import TemplateGenerator from "../src/lib/TemplateGenerator";

const name = "project";
const generator = new TemplateGenerator(name);

it("should be able to generate a directory", () => {
    generator.generateRoot();
    expect(generator.name).toEqual(name);
});
