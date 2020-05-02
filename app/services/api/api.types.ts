import { GeneralApiProblem } from "./api-problem"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export interface Meta {
  next: string | null;
  prev: string | null;
}

export interface SankakuAPI {
  meta: Meta,
  data: Sankaku[]
}

export type Sankaku = {
  id: number;
  rating: Rating;
  status: Status;
  author: Author;
  sample_url: string;
  sample_width: number;
  sample_height: number;
  preview_url: string;
  preview_width: number;
  preview_height: number;
  file_url: string;
  width: number;
  height: number;
  file_size: number;
  file_type: FileType;
  created_at: CreatedAt;
  has_children: boolean;
  has_comments: boolean;
  has_notes: boolean;
  is_favorited: boolean;
  user_vote: null;
  md5: string;
  parent_id: number | null;
  change: number;
  fav_count: number;
  recommended_posts: number;
  recommended_score: number;
  vote_count: number;
  total_score: number;
  comment_count: null;
  source: string;
  in_visible_pool: boolean;
  is_premium: boolean;
  sequence: null;
  tags: Tag[];
}

export interface Author {
  id: number;
  name: string;
  avatar: string;
  avatar_rating: Rating;
}

export enum Rating {
  E = "e",
  Q = "q",
  S = "s",
}

export interface CreatedAt {
  json_class: JSONClass;
  s: number;
  n: number;
}

export enum JSONClass {
  Time = "Time",
}

export enum FileType {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export enum Status {
  Active = "active",
  Pending = "pending",
}

export interface Tag {
  id: number;
  name_en: string;
  name_ja: null | string;
  type: number;
  count: number;
  post_count: number;
  pool_count: number;
  locale: Locale;
  rating: Rating | null;
  name: string;
}

export enum Locale {
  En = "en",
}