import { getReadingTime } from "@/lib/helpers";
import { Post } from "@/types/collections";
import { ArrowRight } from "lucide-react";

interface Props {
  post: Post,
  isPostPage?: boolean
}

export function PostContent({ post, isPostPage = false }: Props) {
  return (
    <div className="space-y-2">
      <div className={`flex items-center flex-wrap gap-2  text-neutral-400 ${
          isPostPage ? "text-sm" : "text-xs @md:text-sm"
        }`}
      >
        <div className={`font-medium ${
            post?.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post?.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${post?.author.first_name} ${post?.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post?.body, 'en')}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>1 month ago</div>
      </div>
      {/* title */}
      <h2  className={`${
          isPostPage
            ? "text-2xl md:text-3xl lg:text-4xl font-bold"
            : "@lg:text-3xl text-xl @md:text-2xl font-medium"
        } `}
      >
        {post.title}
      </h2>
      {/* description */}
      <p className="text-base @lg:text-lg leading-snug text-neutral-600">
        {post.description}
      </p>
      {/* read more */}
      {!isPostPage ? (
        <div className="flex items-center gap-2 pt-3">
          Read more <ArrowRight size="14" />
        </div>
      ) : null}
    </div>
  )
}