export interface User {
    name: string;
    email: string;
}

export interface UserTableListProps {
    users: UserCollection[];
}

export interface TodoItem {
    title: string;
    id: number;
}; 

export interface TodoProps {
    items: TodoItem[];
};

export interface UserCollection {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


