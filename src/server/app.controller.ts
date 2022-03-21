import { Controller, Get, Param, Render, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { toArray, map } from 'rxjs';

import { AppService } from './app.service';
import { ParamsInterceptor } from './params.interceptor';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(ParamsInterceptor)
  home() {
    // // nest-next puts controller return data to ctx.query
    // return this.appService.getBlogPosts().pipe(
    //   toArray(),
    //   map((blogPosts) => ({ blogPosts })),
    // );
    return {};
  }

  @Get('/:id')
  @Render('[id]')
  @UseInterceptors(ParamsInterceptor)
  public blogPost() {
    // console.log("id is...", id)
    // return { id };
    return {};
  }

  @Get('/api/blog-posts')
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get('/api/blog-posts/:id')
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getBlogPost(id);
  }
}
