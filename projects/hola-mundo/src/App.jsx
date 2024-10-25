import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App()  {

    
    const formatUsername = (userName) => `@${userName}`;
    
    return (
        <div className='App'>
        <TwitterFollowCard
        formatUsername={formatUsername} 
        initialIsFollowing = {true}
        userName= 'namelessomar'>
            Omar Torrijos
        </TwitterFollowCard>
        <TwitterFollowCard
        formatUsername={formatUsername}
        initialIsFollowing = {false}
        userName= 'namelessomar'>
            Omar Torrijos
        </TwitterFollowCard>

        {/* esta es la forma correcta de hacer comentarios dentro de los renderizados  */}

        </div>
        
    );
}
