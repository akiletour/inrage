import { NextRequest, NextResponse } from 'next/server'

import { fetcher } from '@util/index'

export async function POST(request: NextRequest) {
  const { email, name, content, postId, parent } = await request.json()

  try {
    const submitComment = await fetcher(
      `mutation CREATE_COMMENT(
        $id: Int
        $authorEmail: String
        $comment: String
        $author: String
        $parent: ID
      ) {
        createComment(
          input: {
            commentOn: $id
            content: $comment
            author: $author
            authorEmail: $authorEmail
            parent: $parent
          }
        ) {
          success
          comment {
            content
          }
        }
      }`,
      {
        id: postId,
        authorEmail: email,
        comment: content,
        author: name,
        parent,
      }
    )

    if (!submitComment) {
      throw Error('Error submitting comment')
    }

    return NextResponse.json({ success: true, message: 'Comment sent' })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Error submitting comment' }),
      {
        status: 400,
      }
    )
  }
}
