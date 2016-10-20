import { Article } from '../shared/article';

export const ARTICLES: Article[] = [
    {
        id: 0,
        content: {
            title: 'Title',
            text: 'Article content',
            timeUpdated: '20 Oct 2016'
        },
        views: 100,
        holisticScore: 20,
        author: null,

        friendMessages: [
            {
                author: null,
                content: 'message content'
            }
        ]
    }
]