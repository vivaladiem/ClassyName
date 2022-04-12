//ClassyName.ts

class ClassyName {
    private result: string;
    private base: string;
    static elementDelimiter = "__";
    static modifierDelimiter = "--";
    public test: string;

    /**
     * 
     * @param baseName : a block name or an block__element-name.
     */
    constructor(baseName: string) {
        this.result = baseName;
        this.base = baseName;
    }

    setElementDelimiter(delimiter: string) {
        this.result = this.result.replace(new RegExp(ClassyName.elementDelimiter, "g"), delimiter);
        ClassyName.elementDelimiter = delimiter;
    }

    setModifierDelimiter(delimiter: string) {
        this.result = this.result.replace(new RegExp(ClassyName.modifierDelimiter, "g"), delimiter);
        ClassyName.modifierDelimiter = delimiter;
    }

    element(element: string): ClassyName {
        this.result += ClassyName.elementDelimiter + element;
        this.base = this.result;

        return this;
    }

    modifier(modifierName: string, modifierValue?: string): ClassyName {

        this.result += " " + this.base + ClassyName.modifierDelimiter + modifierName;

        if (modifierValue) {
            this.result += ClassyName.modifierDelimiter + modifierValue;
        }

        return this;
    }

    externalClassName(className: string): ClassyName {
        this.result += " " + className;

        return this;
    }

    getResult(): string {
        return this.result;
    }

}

export default ClassyName;