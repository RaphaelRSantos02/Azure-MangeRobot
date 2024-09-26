export enum PartTypes {
    "heads", "torsos", "arms", "bases"
}

export class Part{
    id: number = 0;
    description: string = "";
    title: string = "";
    src: string = "";
    type: PartTypes = PartTypes.heads;
    cost: number = 0.0;

}