import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className='App'>
        <TwitterFollowCard userName="FuriGod" initialIsFollowing =  {true} color={'#6496e9'}>
            Lady Furina
        </TwitterFollowCard>

        <TwitterFollowCard userName="ArleGod" color={'#e4404b'}>
            Arlecchino
        </TwitterFollowCard>

        <TwitterFollowCard userName="CloriGod" color={'#ad6fc8'}>
            Clorinde
        </TwitterFollowCard>

        <TwitterFollowCard userName="NaviaGod" color={'gold'}>
            Navia
        </TwitterFollowCard>

        </section>
    )
}