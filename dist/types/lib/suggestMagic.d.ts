import { FosContext, FosNode } from "@/fos/temp-types";
export declare const suggestMagic: (promptGPT: (systemPrompt: string, userPrompt: string, options?: {
    temperature?: number | undefined;
}) => Promise<{
    choices: {
        message: {
            role: string;
            content: string;
        };
        finishReason: string;
    }[];
}>, node: FosNode) => Promise<FosContext>;
