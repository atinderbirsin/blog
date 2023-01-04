import NavBar from "../components/NavBar";

function NavBarPage() {
    const className = `bg-[#333333] px-1.5 py-3 text-white`

    const links = [
        { label: 'Home', to: '/' },
        { label: 'Authors', to: 'authors' },
        { label: 'MostLikedPost', to: 'mostLikedPost' },
        { label: 'MostCommentedPost', to: 'mostCommentedPost' },
    ];

    return (
        <NavBar links={links} className={className}/>
    )
};

export default NavBarPage;