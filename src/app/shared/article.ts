import { User } from './user';
import { Message } from './message';

export class Article {
    readonly id: number;
    content: {
        title: string,
        text: string,
        timeUpdated: string
    };
    views: number;
    holisticScore: number;
    author: User;

    constructor(id: number) {
        this.id = id;
    }
}
