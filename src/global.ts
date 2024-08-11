export interface TUser {
  id: number
  email: string
  username: string
  token?: string
  avatar?: string
}

export interface TPost {
  id: number
  content: string
  category: number
  createdAt: string
  author: {
    id: number
    name: string
    avatar: string
  }
  commentsCount: number
};
