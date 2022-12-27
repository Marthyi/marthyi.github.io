export interface PostModel {
  fileName: string;
  title: string;
  image: string;
  creationDate: Date;
  tags: string[];
}

export interface PostServiceModel {
  title: string;
  image: string;
  tags: string[];
}

