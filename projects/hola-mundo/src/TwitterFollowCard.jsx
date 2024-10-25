import { useState } from "react";

export function TwitterFollowCard({formatUsername, children, userName = 'unkwown', initialIsFollowing}) {

const [isFollowing, setIsFollowing] = useState(initialIsFollowing
    
);
const imgSrc = `https://unavatar.io/${userName}`;
const text = isFollowing ? 'Following' : 'Follow';
const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

const handleClick = () => {
    setIsFollowing(!isFollowing);
};

    return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
        alt="avatar_1" src={imgSrc}/>
        <div className='tw-followCard-info'>
            <strong> 
                {children}
            </strong>
            <span className='tw-followCard-info-user'>{formatUsername(userName)}</span>
        </div>
    </header>
    <aside>
        <button  className={buttonClassName} onClick={handleClick}>{text}</button>
    </aside>
</article>
)
}