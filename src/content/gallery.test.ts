import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { galleryContent } from './gallery'

const publicDir = resolve(process.cwd(), 'public')

function publicAssetPath(url: string) {
  const relative = url.replace(/^.*?\/(videos|images)\//, '$1/')
  return resolve(publicDir, relative)
}

describe('galleryContent', () => {
  it('ships six unique clips', () => {
    expect(galleryContent.items).toHaveLength(6)

    const ids = galleryContent.items.map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('points every clip at an existing video and poster', () => {
    for (const item of galleryContent.items) {
      expect(existsSync(publicAssetPath(item.video)), item.video).toBe(true)
      expect(existsSync(publicAssetPath(item.poster)), item.poster).toBe(true)
    }
  })

  it('links every clip back to Instagram', () => {
    for (const item of galleryContent.items) {
      expect(item.instagramUrl).toMatch(/^https:\/\/www\.instagram\.com\/(reel|p)\/[\w-]+\/$/)
    }
  })
})
