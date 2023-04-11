import { mkdirp } from "mkdirp";
import * as path from "path";

class TemplateGenerator {
    private _name: string;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * Generates the root directory
     */
    generateRoot = (): void => {
        this.generateDir(path.join(this.name));
    };

    /**
     * Recursively generates the directories
     * @param path The directories path
     */
    private generateDir(path: string): void {
        console.log(path);

        mkdirp.sync(path);
    }

    /** Getters setters **/

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}

export default TemplateGenerator;
