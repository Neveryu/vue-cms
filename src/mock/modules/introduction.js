/**
 * 简述页面 mock 数据 - 电影图片列表
 */

import { responseFormat } from '@/mock/index'

// 使用 picsum.photos 占位图片服务（无防盗链限制）
const movieImages = [
  {
    images: { large: 'https://picsum.photos/seed/movie1/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie2/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie3/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie4/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie5/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie6/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie7/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie8/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie9/320/420.jpg' },
  },
  {
    images: { large: 'https://picsum.photos/seed/movie10/320/420.jpg' },
  },
]

export default {
  getMovieImages: {
    state: true,
    url: '/introduction/getMovieImages',
    method: 'get',
    result: () => {
      return responseFormat({
        subjects: movieImages,
      })
    },
  },
}
