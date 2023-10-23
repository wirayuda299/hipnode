import {
  OptionBar,
  LeftSidebar,
  Performance,
  PostCard,
  HostMeetupCard,
  Pagination,
} from '@/components/index';
import { postDummyData, cardBtns } from '@/constant';

export default function ProfilePage() {
  return (
    <div className='flex flex-col items-start justify-center gap-6 lg:flex-row'>
      <LeftSidebar />

      <div className='w-full lg:hidden'>
        <HostMeetupCard cardBtns={cardBtns} />
      </div>

      <main className='flex w-full flex-col lg:max-w-[785px]'>
        <OptionBar />
        <div>
          {postDummyData?.map((post) => (
            <PostCard
              key={post.id}
              name={post.name}
              title={post.title}
              tags={post.tags}
              views={post.views}
              mainImage={post.mainImage}
              createdDate={post.createdDate}
              avatar={post.avatar}
              comments={post.comments}
              online={post.online}
              isLiked={post.isLiked}
              likes={post.likes}
            />
          ))}
          <Pagination totalPages={20} />
        </div>
      </main>

      <aside className='flex w-full flex-col gap-5 lg:sticky lg:top-0 lg:max-w-[325px]'>
        <div className='hidden lg:block'>
          <HostMeetupCard cardBtns={cardBtns} />
        </div>

        <Performance />
      </aside>
    </div>
  );
}
