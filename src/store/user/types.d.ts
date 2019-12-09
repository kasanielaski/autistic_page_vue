export type UserT = {
    id: number;
    token: string;
    email: string;
    username: string;
};

export interface IUserState {
    user: UserT | undefined;
    error: string;
}
