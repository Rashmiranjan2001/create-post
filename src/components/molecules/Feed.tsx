import { useEffect, useState } from 'react';
import AddNewPost from '../content/AddNewPost';
import './styles/feed.scss';
import { MockDatas } from '../../constants/mockData';
import { type TUser, type TPost } from '../../global';
import Post from '../content/Post';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { logout } from '../../services/auth-services';

const Feed = ({ currentUser }: { currentUser?: TUser }): JSX.Element => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    logout();
    navigate(0); // rerender
  };

  const handlePost = (postContent: string, category: number): void => {
    // Check if not logged in and redirect to login page
    if (!currentUser?.id) {
      navigate(ROUTES.LOGIN, { state: { previousLocation: ROUTES.THREADS } });
      return;
    }

    const newPost: TPost = {
      id: Math.floor(100 * Math.random()),
      content: postContent,
      category,
      createdAt: new Date().toISOString(),
      author: {
        id: currentUser.id,
        name: currentUser.username,
        avatar: currentUser.avatar ?? 'https://randomuser.me/api/portraits/men/81.jpg'
      },
      commentsCount: 0
    };

    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    // Fetch posts from the server
    setPosts(MockDatas);
  }, []);

  return (
    <div className='blog'>
      <div className='blog__content'>
        <h1 className='blog__content__title'>Hello {currentUser?.username ?? 'Guest'}</h1>
        <div className='blog__content__description'>
          How are you doing today? Would you like to share something with the community 🤗
        </div>
        <div className='blog__content__posts'>
          <AddNewPost handlePost={handlePost} />
          {
            posts.map((post: TPost) => (
              <Post key={post.id} {...post} />
            ))
          }
        </div>
      </div>
      {
        currentUser?.id &&
        <div className='blog__logout' onClick={handleLogout}>Logout</div>
      }
    </div>
  );
};

export default Feed;
