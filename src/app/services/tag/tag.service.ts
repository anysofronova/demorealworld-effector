import { request } from '@/shared/http'

class TagService {
  async getAllTags() {
    return await request<string[]>({
      url: '/api/tags',
      method: 'get',
    })
  }
}

export const tagService = new TagService()