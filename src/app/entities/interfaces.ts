export interface Post {
    postId: number;
    title: string;
    description: string;
    path: string;
    user: string;
    upvotes: number;
    downvotes: number;
    yourvote: number;
    big: boolean;
    comment: Comment[];
}

export interface Session {
    sessionkey: string;
    userId: number;
    user: User;
}

export interface Comment {
    id: number;
    user: string;
    text: string;
    upvotes: number;
    downvotes: number;
    yourvote: number;
    comment: Comment[];
    reply: boolean;
    collapse: boolean;
}

export interface User {
    userId: number;
    username: string;
}

export interface Response {
    success: boolean;
    message: string;
    code: number;
    data: any;
}
