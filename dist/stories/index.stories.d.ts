import { TemplateResult } from 'lit';
import '../src/bldn-priv-request.js';
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        title: {
            control: string;
        };
        counter: {
            control: string;
        };
        textColor: {
            control: string;
        };
    };
};
export default _default;
interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}
interface ArgTypes {
    title?: string;
    counter?: number;
    textColor?: string;
    slot?: TemplateResult;
}
export declare const Regular: Story<ArgTypes>;
export declare const CustomTitle: Story<ArgTypes>;
export declare const CustomCounter: Story<ArgTypes>;
export declare const SlottedContent: Story<ArgTypes>;
