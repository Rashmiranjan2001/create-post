import moment, { type MomentInput } from 'moment';
import { EMOJIS } from '../../constants/emojis';
import { type TPost } from '../../global';
import chat from '../../assets/images/chat.svg';
import './styles/post.scss';

const Post = (props: TPost): JSX.Element => {
  return (
    <div className='post'>
      <div className='post__author'>
        <img className='post__author__avatar' src={props.author.avatar} />
        <div className='post__author__details'>
          <div className='post__author__details__name'>{props.author.name}</div>
          <div className='post__author__details__time'>{moment(props.createdAt as MomentInput).fromNow()}</div>
        </div>
        <div className='post__author__menu'>...</div>
      </div>

      <div className='post__content'>
        <span className='post__content__category'>
          {EMOJIS[props.category]}
        </span>
        <span className='post__content__text'>
          {props.content}
        </span>
      </div>

      <div className='post__footer'>
        <div className='post__footer__comments'>
          <img src={chat} />
          <span>{props.commentsCount} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
