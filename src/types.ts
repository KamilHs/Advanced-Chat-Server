export enum MessageStatus {
    sent,
    received,
    seen,
}

export enum MessageType {
    text,
    image,
    audio,
}

export interface IAuthor {
    id: string,
    avatar: string | null,
    username: string,
    isAuthorOnline: boolean

}

export interface IMessage {
    id: string,
    author: IAuthor,
    date: Date,
    dialogId: string,
    content: string | File,
    status: MessageStatus
}

export interface IDialog {
    id: string,
    lastMessage: IMessage,
}