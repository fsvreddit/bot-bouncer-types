export interface ReducedComment {
    id: `t1_${string}`;
    createdAt: number;
    subredditName: string;
    postId: `t3_${string}`;
    authorName: string;
    authorId: `t2_${string}` | undefined;
}
