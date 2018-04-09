export class Story {
    public id: string;
    public by: string;
    public descendants: number;
    public kids?: Array<number>;
    public score: number;
    public time: number;
    public title: string;
    public parent: number;
    public text?: string;
    public type: string;
    public url?: string;
}