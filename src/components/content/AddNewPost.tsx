import { useState } from 'react';
import Button from '../sharedComponents/Button';
import './styles/create-post.scss';
import { EMOJIS } from '../../constants/emojis';

interface ICreatePostProps {
  handlePost: (postContent: string, category: number) => void
}

const AddNewPost = (props: ICreatePostProps): JSX.Element => {
  const [postContent, setPostContent] = useState('');
  const [category, setCategory] = useState(0);

  const handleCategoryChange = (): void => {
    setCategory((category + 1) % 4);
  };

  const onClick = (): void => {
    if (postContent === '') {
      return;
    }

    // Post the content to the server
    props.handlePost(postContent, category);
  };

  return (
    <div className='create-post'>
      <div className='create-post__title'>Create post</div>
      <div className='create-post__input'>
        <span className='create-post__input__category' onClick={handleCategoryChange}>
          {EMOJIS[category]}
        </span>
        <textarea className='create-post__input__textarea'
          placeholder='How are you feeling today?'
          rows={1}
          value={postContent}
          onChange={(e) => { setPostContent(e.target.value); }}
        />
      </div>
      <div className='create-post__action'>
        <div className='create-post__action__post'>
          <Button
            text='Post'
            variant='primary'
            onClick={onClick}
            size='large'
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
