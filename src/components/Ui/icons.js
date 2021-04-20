import styled from 'styled-components'
import {Home} from '@styled-icons/ionicons-solid/Home'
import {StatsBars} from '@styled-icons/icomoon/StatsBars'
import {MessageAltEdit} from '@styled-icons/boxicons-solid/MessageAltEdit'
import {Work} from '@styled-icons/material/Work'
import { SocialGithubCircular } from '@styled-icons/typicons/SocialGithubCircular'
import { Google } from '@styled-icons/boxicons-logos/Google' 

export const GithubIcon = styled(SocialGithubCircular)`
width: 2.4rem;
height: 2.4rem;
color: #e76f51;

&:hover {
    color: #e76f51e5;
    filter: drop-shadow(1px 1px 1px black);
    opacity: 0.8;
    transform: scale(0.92);
}`;
export const GoogleIcon = styled(Google)`
width: 2.4rem;
height: 2.4rem;
color: #606c38;

&:hover {
    color: #606c38e5;
    filter: drop-shadow(1px 1px 1px black);
    transform: scale(0.92);
}`;

export const HomeIcon = styled(Home)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}`;

export const ChartIcon = styled(StatsBars)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}`;

export const MsgIcon = styled(MessageAltEdit)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}`;

export const WorkIcon = styled(Work)`
width: 2.4rem;
height: 2.4rem;
color: ${({ theme }) => theme.text};

&:hover {
    color: #f2f2f3;
    opacity: 0.8;
    transform: scale(0.92);
}`;