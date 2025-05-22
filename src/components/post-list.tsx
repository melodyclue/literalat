import { allPosts } from 'content-collections';
import parse from 'html-react-parser';
import { format } from 'date-fns';

export default function PostList() {
  return (
    <section className="space-y-6 bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">お知らせ</h2>
          <span className="text-sm text-gray-500">{allPosts.length}件</span>
        </div>
        <ul className="rounded-lg">
          {allPosts.map((post) => (
            <li key={post._meta.path} className="group">
              <div
                // href={`/posts/${post._meta.path}`}
                className="block p-5 bg-white border border-gray-50 hover:border-gray-100 transition-all duration-200"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <time
                      dateTime={post.date}
                      className="text-sm text-gray-500"
                    >
                      {format(new Date(post.date), 'yyyy/MM/dd')}
                    </time>
                    <div className="mt-1.5 text-sm text-gray-600 whitespace-pre-wrap [&_a]:underline">
                      {parse(post.html)}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {post.category?.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 rounded-md"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
