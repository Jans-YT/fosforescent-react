import { FosNodeData, FosNodeContent, FosContextData, FosRoute, FosTrail, FosNodesData } from './temp-types';
import { FosNode } from './fosNode';
export declare class FosContext {
    data: FosContextData;
    updateData: (data: FosContextData) => void;
    locked: boolean;
    constructor(data: FosContextData, updateData: (data: FosContextData) => void);
    setNodes(newNodes: FosNodesData, newFocus?: {
        route: FosRoute;
        char: number;
    }, newTrail?: FosTrail): FosContext;
    setTrail(newTrail: FosTrail): FosContext;
    setFocus(newRoute: FosRoute, char: number): FosContext;
    getNode(route: FosRoute): FosNode;
    setNode(node: FosNode, nodeData: FosNodeData): FosContext;
    insertNode(nodeData: FosNodeData, route: FosRoute, index?: number): [FosContext, string];
    updateNodeAtRoute(route: FosRoute, nodeData: FosNodeData): FosContext;
    updateNodeOptionData(route: FosRoute, nodeContent: FosNodeContent, index?: number): FosContext;
    getNodeOptionsAndObj(route: FosRoute): [FosNodeData, FosNodeContent, number];
    newId(nodeData: FosNodeData): `${string}-${string}-${string}-${string}-${string}`;
    addNewTaskToOption(route: FosRoute, contentIndex?: number, optionIndex?: number): FosContext;
    setOptionOnNode(route: FosRoute, optionData: FosNodeContent | null, index?: number): FosContext;
    addOptionToNode(route: FosRoute, nodeOptionData?: FosNodeContent, index?: number): FosContext;
    moveNodeLeft(route: FosRoute): void;
    addYoungerSibling(route: FosRoute): void;
    moveNodeRight(route: FosRoute): void;
    moveNodeUp(route: FosRoute): void;
    moveNodeDown(route: FosRoute): void;
    removeNodeFromParent(route: FosRoute): void;
    deleteOption(route: FosRoute, index?: number): void;
    deleteNode(route: FosRoute): FosContext;
    snipNode(route: FosRoute): FosContext;
    deserializeTrailFromUrl(url: string): FosTrail;
    serializeTrailToUrl(trail: FosTrail): string;
    addChildrenToNode(node: FosNode, children: FosNodeData[], index?: number): FosContext;
    moveNodeToTopChild(subjectNode: FosNode, targetNode: FosNode, index?: number): FosContext;
    moveNodeToOlderSibling(subjectNode: FosNode, targetNode: FosNode, index?: number): FosContext;
    moveNodeToYoungerSibling(subjectNode: FosNode, targetNode: FosNode, index?: number): FosContext;
}
