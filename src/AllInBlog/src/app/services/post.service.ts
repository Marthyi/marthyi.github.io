import { Injectable } from "@angular/core";
import {
  PostModel,
  PostServiceModel,
} from "src/app/services/serviceModels/serviceModels";
import { HttpClient } from "@angular/common/http";
import { map, catchError, delay } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  
  
  constructor(private httpClient: HttpClient) {}

 

  getPosts(): Observable<PostModel[]> {

    const response = this.httpClient
      .get<PostServiceModel[]>("/assets/api/posts.json")
      .pipe(
        map((p) => p.map(this.mapPostModel))
        );

      return response;
  }

  protected mapPostModel(apiModel: PostServiceModel): PostModel {
    const x = /(\d{4}-\d{2}-\d{2})(.*)/;
    const compile = x.exec(apiModel.title);

    return <PostModel>{
      title: compile?.[2].replace(/-/gi, " "),
      creationDate: new Date(compile?.[1] || ""),
      fileName: apiModel.title,
      image: apiModel.image,
      tags: apiModel.tags,
    };
  }
}
