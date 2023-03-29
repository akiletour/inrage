import { NextRequest, NextResponse } from 'next/server';

import CreatePostQuery from '@graphql-query/submit-comment.graphql';
import { fetcher } from '@util/index';

export async function POST(request: NextRequest) {
  const { email, name, content, postId, parent } = await request.json();

  try {
    const submitComment = await fetcher(CreatePostQuery, {
      id: postId,
      authorEmail: email,
      comment: content,
      author: name,
      parent,
    });

    if (!submitComment) {
      throw Error('Error submitting comment');
    }

    return NextResponse.json({ success: true, message: 'Comment sent' });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Error submitting comment' }),
      {
        status: 400,
      }
    );
  }
}
