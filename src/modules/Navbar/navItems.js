import { nanoid } from 'nanoid';

const navItems = [
    {
        id: nanoid(),
        text: 'Home',
        link: '/',
    },
    {
        id: nanoid(),
        text: 'Movies',
        link: '/movies',
    }
];

export default navItems;
